import React, { Component } from "react";
import PropTypes from "prop-types";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: ``,
      email: ``,
      password: ``
    };
  }

  onHandleInput = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  headleSubmit = e => {
    const { name, email, country } = this.state;
    e.preventDefault();

    this.props.onSubmit({ name, email, country });
  };

  render() {
    return (
      <form action="" onSubmit={this.headleSubmit}>
        <input placeholder="name" onChange={this.onHandleInput} type="text" name="name" />
        <input placeholder="email" onChange={this.onHandleInput} type="email" name="email" />
        <input placeholder="country" onChange={this.onHandleInput} type="text" name="country" />
        <button type="sumbit">Submit</button>
      </form>
    );
  }
}

// Form.PropTypes = {
//   onSubmit: PropTypes.func
// };

export default Form;
