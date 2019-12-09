import React, { Component } from "react";

class LanguageOptions extends Component {
  
  render() {
    return (
      <div>
        <select onChange={this.props.handleLanguageChange}>
          <option value="en">En - English</option>
          <option value="de">De - Deutsch</option>
        </select>
      </div>
    );
  }
}

export default LanguageOptions;
