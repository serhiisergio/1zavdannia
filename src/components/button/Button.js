import React, { Component } from "react";
import styles from "./Button.module.css";

class Button extends Component {
  render() {
    return (
      <div className={styles.btn}>
        <button type={this.props.type}>{this.props.text}</button>
      </div>
    );
  }
}

export default Button;
