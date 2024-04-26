import React from "react";
import { useSelector } from "react-redux";

function Userprofile() {
  const { registerData, token } = useSelector((state) => state.auth);
  if (token == null) {
    window.location.reload();
  }
  return (
    <div>
      {token ? (
        <div>
          <p>{registerData?.firstname}</p>
          <p>{registerData?.lastname}</p>
          <p>{registerData?.email}</p>
          <p>{registerData?.address}</p>
        </div>
      ) : (
        <p>Sorry please Login</p>
      )}
    </div>
  );
}

export default Userprofile;
