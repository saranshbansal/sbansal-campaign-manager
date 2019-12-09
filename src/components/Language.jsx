import React, { Component } from "react";
import Locales from "../resources/locales";

class Language extends Component {
  render() {
    return (
      <div>
        <select onChange={this.props.handleLanguageChange}>
          <option value="en">En- English</option>
          <option value="it">It- Italian</option>
          {Locales.how}
        </select>
      </div>
    );
  }
}

export default Language;
