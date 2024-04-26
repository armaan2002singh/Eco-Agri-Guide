import React from "react";
import { Link, useNavigate } from "react-router-dom";
import style from "C:/Users/Armann/Desktop/major_project/client/src/pages/Header.css";
import { useDispatch, useSelector } from "react-redux";
import { setRegisterData, setToken } from "../slice/authSlice";
function Header() {
  const { token, registerData } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = () => {
    dispatch(setToken(null));
    dispatch(setRegisterData(null));
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };



  return (
    <div>
      <nav className="navbar navbar-expand-lg w-100" style={{ height: 70 }}>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link to="/" className="text-white m-3" style={style}>
                Home
              </Link>
            </li>
            <li class="nav-item active">
              {
                registerData?.email === "armaanaulakh2002@gmail.com" && (<Link to="/Admin" className="text-white m-3" style={style}>
                User Section
              </Link>)
              }
            </li>
          </ul>
          <div class="form-inline my-2 my-lg-0">
            {!token ? (
              <div>
                <Link to="/register">
                  <button class="btn btn-outline-success my-2 my-sm-0 m-2 text-white">
                    Register
                  </button>
                </Link>
                <Link to="/login">
                  <button class="btn btn-outline-success my-2 my-sm-0 text-white">
                    Login
                  </button>
                </Link>
              </div>
            ) : (<div style={{display:"flex", columnGap:"10px"}}>
              <Link to="/userProfile">
              <button
                class="btn btn-outline-success my-2 my-sm-0 text-white ml-2"
              >
                Profile
              </button>
              </Link>
                 
              <button
                class="btn btn-outline-success my-2 my-sm-0 text-white"
                onClick={handleLogOut}
              >
                Logout
              </button>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
