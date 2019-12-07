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
          <CampaignContainer status="1" />
        </div>
        <div label="Live Campaigns">
          <CampaignContainer status="2" />
        </div>
        <div label="Past Campaigns">
          <CampaignContainer status="3" />
        </div>
      </Tabs>
    </div>
  );
};

export default Layout;
