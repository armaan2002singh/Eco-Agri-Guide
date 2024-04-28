import React, { useEffect, useState } from "react";
import axios from "axios";

function User() {
  const [users, setusers] = useState(null);
  const [form, setform] = useState({
    firstname: "",
    lastname: "",
    address: "",
    email: "",
    password: "",
  });
  const [formError, setFormError] = useState({
    firstname: "",
    lastname: "",
    address: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    getAll();
  }, []);

  const changeHandler = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  function getAll() {
    axios.get("http://localhost:8081/user").then((d) => {
      setusers(d.data.userData);
    });
  }

  function renderUser() {
    return users?.map((item) => {
      return (
            <tr>
              <td>{item.firstname}</td>
              <td>{item.lastname}</td>
              <td>{item.address}</td>
              <td>{item.email}</td>
              <td>
                <button
                  onClick={() => {
                    setform(item);
                  }}
                  className="btn btn-info m-1"
                  data-toggle="modal"
                  data-target="#editModal"
                >
                  Edit
                </button>
                <button
                  onClick={() => {
                    deleteClick(item._id);
                  }}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
      );
    });
  }
  const deleteClick = (id) => {
    let ans = window.confirm("Want to Delete Data?");
    if (!ans) return;

    axios
      .delete("http://localhost:8081/user", { data: { id: id } })
      .then((d) => {
        alert(d.data.message);
        getAll();
      });
  };
  function saveClick() {
    axios.post("http://localhost:8081/user", form).then((d) => {
      alert("data saved");
      getAll();
      resetForm();
    });
  }
  function resetForm() {
    setform({
      firstname: "",
      lastname: "",
      address: "",
      email: "",
      password: "",
    });
  }

  function updateClick() {
    axios
      .put("http://localhost:8081/user", form)
      .then((response) => {
        alert(response.data.message); // Show success message from the server
        resetForm(); // Clear the form fields
        getAll(); // Fetch updated user data
      })
      .catch((error) => {
        console.error("Error updating user:", error);
        // Handle error, show error message to the user, etc.
      });
  }

  // function updateClick() {
  //   axios.put("http://localhost:8081/user", form)
  //     .then((d) => {
  //       alert("Data updated");
  //       resetForm();
  //       getAll();
  //     })
  // }
  return (
    <div>
      <div className="row m-2">
        <div className="col-9">
          <h2 style={{ color: "black" }}>User List</h2>
        </div>
        <div className="col-3">
          <button
            class="btn form-control"
            data-toggle="modal"
            data-target="#saveModal"
            style={{ color: "white", backgroundColor: "#23bd82" }}
          >
            Add New User
          </button>
        </div>
      </div>
      <div className="container m-2 p-2">
        <table className="container rounded table-striped table-bordered table-active">
          <thead>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Address</th>
            <th>Email</th>
            <th>Actions</th>
          </thead>
          <tbody>{renderUser()}</tbody>
        </table>
      </div>

      <div
        class="modal fade"
        id="saveModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div
              class="modal-header"
              style={{ backgroundColor: "#23bd82", color: "white" }}
            >
              <h5 class="modal-title" id="title">
                Add new User
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true" style={{ color: "white" }}>
                  &times;
                </span>
              </button>
            </div>
            <div class="modal-body">
              <div className="row m-2">
                <div className="col-4">
                  <label for="firstname">First Name</label>
                </div>
                <div className="col-8">
                  <input
                    type="text"
                    id="firstname"
                    name="firstname"
                    placeholder="Enter First Name"
                    className="form-control"
                    onChange={changeHandler}
                    value={form.firstname}
                    required
                  ></input>
                </div>
              </div>
              <div className="row m-2">
                <div className="col-4">
                  <label for="lastname">Last Name</label>
                </div>
                <div className="col-8">
                  <input
                    type="text"
                    id="lastname"
                    name="lastname"
                    placeholder="Enter Last Name"
                    className="form-control"
                    onChange={changeHandler}
                    value={form.lastname}
                    required
                  ></input>
                </div>
              </div>
              <div className="row m-2">
                <div className="col-4">
                  <label for="address">Address</label>
                </div>
                <div className="col-8">
                  <input
                    type="text"
                    id="address"
                    name="address"
                    placeholder="Enter Address"
                    className="form-control"
                    onChange={changeHandler}
                    value={form.address}
                    required
                  ></input>
                </div>
              </div>

              <div className="row m-2">
                <div className="col-4">
                  <label for="email">Email</label>
                </div>
                <div className="col-8">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter Email"
                    className="form-control"
                    onChange={changeHandler}
                    value={form.email}
                    required
                  ></input>
                </div>
              </div>

              <div className="row m-2">
                <div className="col-4">
                  <label for="password">Password</label>
                </div>
                <div className="col-8">
                  <input
                    type="number"
                    id="password"
                    name="password"
                    placeholder="Enter password"
                    className="form-control"
                    onChange={changeHandler}
                    value={form.password}
                    required
                  ></input>
                </div>
              </div>
            </div>
            <div
              class="modal-footer"
              style={{ backgroundColor: "#23bd82", color: "white" }}
            >
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-primary"
                data-dismiss="modal"
                onClick={saveClick}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        class="modal fade"
        id="editModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div
              class="modal-header"
              style={{ backgroundColor: "#23bd82", color: "white" }}
            >
              <h5 class="modal-title" id="title">
                Edit User
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true" style={{ color: "white" }}>
                  &times;
                </span>
              </button>
            </div>
            <div class="modal-body">
              <div className="row m-2">
                <div className="col-4">
                  <label for="firstname">First Name</label>
                </div>
                <div className="col-8">
                  <input
                    type="text"
                    id="firstname"
                    name="firstname"
                    placeholder="Enter First Name"
                    className="form-control"
                    onChange={changeHandler}
                    value={form.firstname}
                    required
                  ></input>
                </div>
              </div>
              <div className="row m-2">
                <div className="col-4">
                  <label for="lastname">Last Name</label>
                </div>
                <div className="col-8">
                  <input
                    type="text"
                    id="lastname"
                    name="lastname"
                    placeholder="Enter Last Name"
                    className="form-control"
                    onChange={changeHandler}
                    value={form.lastname}
                    required
                  ></input>
                </div>
              </div>
              <div className="row m-2">
                <div className="col-4">
                  <label for="address">Address</label>
                </div>
                <div className="col-8">
                  <input
                    type="text"
                    id="address"
                    name="address"
                    placeholder="Enter Address"
                    className="form-control"
                    onChange={changeHandler}
                    value={form.address}
                    required
                  ></input>
                </div>
              </div>

              <div className="row m-2">
                <div className="col-4">
                  <label for="email">Email</label>
                </div>
                <div className="col-8">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter Email"
                    className="form-control"
                    onChange={changeHandler}
                    value={form.email}
                    required
                  ></input>
                </div>
              </div>
            </div>
            <div
              class="modal-footer"
              style={{ backgroundColor: "#23bd82", color: "white" }}
            >
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-primary"
                data-dismiss="modal"
                onClick={updateClick}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
