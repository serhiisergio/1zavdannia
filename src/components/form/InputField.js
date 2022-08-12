import React, { Component } from "react";

class InputField extends Component {
  render() {
    return (
      <div>
        <label htmlFor={this.props.htmlFor}>{this.props.text}</label>
        <input
          type={this.props.type}
          id={this.props.id}
          placeholder={this.props.placeholder}
        />
      </div>
    );
  }
}

export default InputField;
