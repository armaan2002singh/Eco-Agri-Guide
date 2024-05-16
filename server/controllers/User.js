import UserModel from "../models/User.js";

export const CreateUser = async (req, res) => {
  try {
    const userData = await UserModel.create(req.body);
    if (userData) res.status(201).send({ message: "User Created" });
    else res.status(404).send({ message: "Unable to create user" });
  } catch (e) {
    res.status(404).send({ error: e?.message });
  }
};
export const UpdateUser = async (req, res) => {
  try {
    const userData = await UserModel.findByIdAndUpdate(
      { _id: req.body._id },
      {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        pincode: req.body.pincode,
        email: req.body.email,
      }
    );
    if (userData) res.status(200).send({ message: "User Updated" });
    else res.status(404).send({ message: "Unable to update user" });
  } catch (e) {
    res.status(404).send({ error: e?.message });
  }
};
export const DeleteUser = async (req, res) => {
  try {
    const userData = await UserModel.deleteOne({ _id: req.body.id });
    if (userData?.deletedCount == 1)
      res.status(200).send({ message: "User Deleted" });
    else res.status(404).send({ message: "Unable to delete user" });
  } catch (e) {
    res.status(404).send({ error: e?.message });
  }
};
export const GetUsers = async (req, res) => {
  try {
    const userData = await UserModel.find();
    res.status(200).send({ userData });
  } catch (e) {
    res.status(404).send({ error: e?.message });
  }
};

const generateAccessAndRefreshTokens = async (userId) => {
  try {
    const user = await UserModel.findById(userId);

    const accessToken = await user.generateAccessToken();

    await user.save({ validateBeforeSave: false });

    return { accessToken };
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong while generating token",
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email is invaild",
      });
    }

    if (!password) {
      return res.status(400).json({
        success: false,
        message: "Password is invaild",
      });
    }

    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User is not valid",
      });
    }

    if (user.password != password) {
      return res.status(400).json({
        success: false,
        message: "Password is not matched",
      });
    }

    const { accessToken } = await generateAccessAndRefreshTokens(user._id);

    const loggedInUser = await UserModel.findById(user._id).select(
      "-password -confirmpassword"
    );

    const options = {
      httpOnly: true,
      secure: true,
    };

    return res.status(200).cookie("accessToken", accessToken, options).json({
      user: loggedInUser,
      accessToken,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong while login",
    });
  }
};
