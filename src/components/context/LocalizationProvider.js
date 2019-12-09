import React, { Component } from "react";
import LocalizationContext from "./LocalizationContext";
import Locales from "../../resources/locales";

class LocalizationProvider extends Component {
  state = {
    language: "en"
  };

  render() {
    Locales.setLanguage(this.state.language);

    return (
      <LocalizationContext.Provider
        value={{
          language: this.state.language,
          handleLanguageChange: (e) => {
            e.preventDefault();
            let lang = e.target.value;
            this.setState(prevState => ({
              language: lang
            }));
          },
        }}
      >
        {this.props.children}
      </LocalizationContext.Provider>
    );
  }
}

export default LocalizationProvider;
