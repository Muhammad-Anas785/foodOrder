import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy Name",
        login: "Dummy ID",
      },
    };
    console.log(this.props.name + "Child Constructor");
  }
  async componentDidMount() {
    console.log(this.props.name + "Child componentDidMount");
    const data = await fetch("https://api.github.com/users/Muhammad-Anas785");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    this.timer = setInterval(() => {
      console.log("Component did mount interval");
    }, 1000);
  }
  componentDidUpdate() {
    console.log("Component Did Update Calls");
  }
  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("Component Will Unmount");
  }
  render() {
    console.log(this.props.name + "Child Render");
    const { name, login } = this.state.userInfo;

    return (
      <div className="user-container">
        <h2>Name: {name} </h2>
        <h3>Login ID: {login}</h3>
      </div>
    );
  }
}
export default UserClass;

/*
-Constructor(dummy data)
-render method
-<HTML Dummy data load>
-Component Did Mount (Api call data)(setState )
-again render with api data and load html with api data

*/
