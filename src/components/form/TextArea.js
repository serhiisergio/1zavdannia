import React, { Component } from "react";

class TextArea extends Component {
  render() {
    return (
      <div>
        <label htmlFor={this.props.htmlFor}>{this.props.text}</label>
        <textarea
          id={this.props.id}
          name={this.props.name}
          cols={this.props.cols}
          rows={this.props.rows}
          placeholder={this.props.placeholder}
        />
      </div>
    );
  }
}

export default TextArea;
