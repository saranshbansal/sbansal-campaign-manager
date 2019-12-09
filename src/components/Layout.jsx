import React from "react";
import Locales from "../resources/locales";
import CampaignContainer from "./CampaignContainer.js";
import LocalizationContext from "./context/LocalizationContext";
import Header from "./Header";
import Tabs from "./library/Tabs";

const Layout = () => {
  return (
    <LocalizationContext.Consumer>
      {context => (
        <div className="root">
          <Header />

          <h1>{Locales.heading}</h1>

          <Tabs>
            {Object.keys(Locales.tabNames).map(key => (
              <div key={key} label={Locales.tabNames[key]}>
                <CampaignContainer type={key} />
              </div>
            ))}
          </Tabs>
        </div>
      )}
    </LocalizationContext.Consumer>
  );
};

export default Layout;
