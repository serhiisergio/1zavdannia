import React, { Component } from "react";

class InputField extends Component {
  // handleChange = (e) => {
  //   // console.log(e.target.value);
  //   this.setState({
  //     [e.target.id]: e.target.value,
  //   });
  //   this.props.getState(this.state);
  // };
  render() {
    const {
      htmlFor,
      text,
      type,
      id,
      placeholder,
      required,
      value,
      handleInputChange,
    } = this.props;

    return (
      <div>
        <label htmlFor={htmlFor}>{text}</label>
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          required={required}
          defaultValue={value}
          onChange={handleInputChange}
        />
      </div>
    );
  }
}

export default InputField;
