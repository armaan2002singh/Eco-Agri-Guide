import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setRegisterData, setToken } from "../slice/authSlice";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // State to hold error message
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:8081/login", {
        email,
        password,
      });
      console.log(response.data.user);
      setToken(response.data.accessToken);
      setRegisterData(response.data.user);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      localStorage.setItem("token", JSON.stringify(response.data.accessToken));
      navigate("/userprofile");
    } catch (error) {
      console.log("Something went wrong while getting data of login");
    }
  };

  return (
    <div>
      <section class="vh-100">
        <div class="container py-5 h-100">
          <div class="row d-flex align-items-center justify-content-center h-100">
            <div class="col-md-9 col-lg-7 col-xl-6">
              <img
                src="https://static.vecteezy.com/system/resources/previews/000/684/737/non_2x/a-farmer-is-planting-corn-vector.jpg"
                class="img-fluid"
                alt="Phone image"
              />
            </div>

            <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              {/* login from.......................................*/}
              <form onSubmit={handleSubmit}>
                <div class="form-outline mb-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id="form1Example13"
                    class="form-control form-control-lg"
                  />
                  <label class="form-label" for="form1Example13">
                    Email address
                  </label>
                  <p class="text-danger">{errorMessage}</p>
                </div>

                <div class="form-outline mb-4">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    id="form1Example23"
                    class="form-control form-control-lg"
                  />
                  <label class="form-label" for="form1Example23">
                    Password
                  </label>
                  <p class="text-danger">{errorMessage}</p>
                </div>

                <div class="d-flex justify-content-around align-items-center mb-4">
                  {/* need to add remember me */}
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="form1Example3"
                    />
                    <label class="form-check-label" for="form1Example3">
                      {" "}
                      Remember me{" "}
                    </label>
                  </div>

                  {/* need to add forget password */}
                  <a href="#!">Forgot password?</a>
                </div>

                <button type="submit" class="btn btn-primary btn-lg btn-block">
                  Sign in
                </button>

                <div class="divider d-flex align-items-center my-4">
                  <p class="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                </div>

                <a
                  class="btn btn-primary btn-lg btn-block"
                  style={{ backgroundColor: "#3b5998" }}
                  href="#!"
                  role="button"
                >
                  <i class="fab fa-facebook-f me-2"></i>Continue with Facebook
                </a>
                <a
                  class="btn btn-primary btn-lg btn-block"
                  style={{ backgroundColor: "#55acee" }}
                  href="#!"
                  role="button"
                >
                  <i class="fab fa-twitter me-2"></i>Continue with Twitter
                </a>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
