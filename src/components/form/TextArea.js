import React, { Component } from "react";

class TextArea extends Component {
  // state = {
  //   aboutMe: null,
  //   stack: null,
  //   project: null,
  // };
  // handleChange = (e) => {
  //   this.setState({ [e.target.id]: e.target.value });
  //   this.props.getState(this.state);
  // };
  render() {
    const {
      htmlFor,
      text,
      id,
      name,
      cols,
      rows,
      placeholder,
      value,
      handleInputChange,
    } = this.props;
    return (
      <div>
        <label htmlFor={htmlFor}>{text}</label>
        <textarea
          id={id}
          name={name}
          cols={cols}
          rows={rows}
          placeholder={placeholder}
          value={value}
          onChange={handleInputChange}
          // onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default TextArea;
