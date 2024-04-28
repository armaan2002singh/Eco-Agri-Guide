import React from "react";
import { useSelector } from "react-redux";
import style from "./UserProfile.css";

function Userprofile() {
  const { registerData, token } = useSelector((state) => state.auth);
  if (token == null) {
    window.location.reload();
  }
  return (
    <div id="procont"  className="col-10 container border 1px solid d-flex ">
      {token ? (
        <div id="details" className="col-6 border solid 1px p-3">
          <h3 className="text-success m-3">UserProfile</h3>
        <div className="row" style={style}>
          <div className="col-3 " style={{marginLeft:'50px'}}>
            <p>Firstname :</p>           
            <p>lastname :</p>
            <p>Email :</p>
            <p>Address :</p>
          </div>

          <div className="col-7 container  p-1">
            <p className="container rounded border 1px solid ">
              {registerData?.firstname}
            </p>

            <p className="container rounded border 1px solid ">
              {registerData?.lastname}
            </p>

            <p className="container rounded border 1px solid overflow-hidden ">
              {registerData?.email}
            </p>

            <p className="container rounded border 1px solid ">
              {registerData?.address}
            </p>
          </div>
        </div>
        {/* ...............................Code of profile container end here........................... */}
        </div>
      ) : (
        <p>Sorry please Login</p>
      )}
      <div id="img" className=" col-5 container  p-3 ">
      <div>
        <img style={{width:"450px"}} src="https://th.bing.com/th/id/OIP.R-jbi9OnJPV5MNsY5P65NAHaE_?w=261&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7"/>
      </div>
      </div>
    </div>
  );
}

export default Userprofile;
