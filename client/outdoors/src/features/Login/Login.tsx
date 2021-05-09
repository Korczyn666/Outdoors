import React from "react";
import "../../styles/login.css"

export default class Login extends React.Component {
  componentDidMount() {
    document.body.style.backgroundImage =
      "linear-gradient(to right ,#7ed56f,#28b485)";
  }
  render() {
    return (
      <div className="loginContainer">
        <div className="loginText">Login</div>
      </div>
    );
  }
}
