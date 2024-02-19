import React from "react";
const User = (props) => {
  return (
    <div className="user-container">
      <h2>Name : {props.name}</h2>
      <h3>Github:{props.github}</h3>
    </div>
  );
};
export default User;
