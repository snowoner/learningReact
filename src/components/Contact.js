import React, { Component } from "react";
import "./Contact.css";

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      name: "Mi nombre",
      count: 0,
      gender: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({
          [name]: checked
        })
      : this.setState({
          [name]: value
        });
  }
  handleClick() {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      };
    });
  }
  render() {
    return (
      <div className="Contact">
        <h2>Contact</h2>
        <p>{this.state.name}</p>
        <p>{this.state.count}</p>
        <p>Your gender: {this.state.gender}</p>
        <input
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
          placeholder="First Name"
        />
        <button onClick={this.handleClick}>Add 1</button>
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={this.state.gender === "male"}
            onChange={this.handleChange}
          />{" "}
          Male
        </label>
      </div>
    );
  }
}

export default Contact;
