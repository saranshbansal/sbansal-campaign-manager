import React from "react";
import CampaignContainer from "./CampaignContainer.js";
import Header from "./Header";
import Tabs from "./library/Tabs";

const Layout = () => {
  return (
    <div className="flex-container">
      <Header />

      <h1>Manage Campaigns</h1>

      <Tabs>
        <div label="Upcoming Campaigns">
          <CampaignContainer type={"U"} />
        </div>
        <div label="Live Campaigns">
          <CampaignContainer type={"L"} />
        </div>
        <div label="Past Campaigns">
          <CampaignContainer type={"P"} />
        </div>
      </Tabs>
    </div>
  );
};

export default Layout;
