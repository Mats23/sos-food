import React, { Component } from "react";
// import { Link } from 'react-router-dom'
import "../sass/Button.scss";

export class Button extends Component {
  render() {
    return (
      <div>
        <a href={this.props.href} className="Button">
          {this.props.button}
        </a>
      </div>
    );
  }
}

export default Button;
