import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);

    // console.log("Parent Constructor");
  }
  componentDidMount() {
    // console.log("Parent componentDidMount");
  }
  render() {
    // console.log("Parent Render");
    return (
      <div>
        <h1>About us Page</h1>
        <UserClass name=" Muhammad Anas " linkedIn=" Muhammad_Anas" />
      </div>
    );
  }
}

export default About;
