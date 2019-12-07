import React, { Component } from "react";
import { fetchCampaigns } from "../resources/api";
import CampaignList from "./CampaignList";
import Loader from "./library/Loader";

class CampaignContainer extends Component {
  constructor(props) {
    super(props);

    this.refreshResults = this.refreshResults.bind(this);
  }

  state = {
    campaigns: [],
    limit: 20,
    offset: 0,
    loading: false
  };

  componentDidMount() {
    this.refreshResults();
  }

  async refreshResults(offset = 0) {
    const { campaigns, limit } = this.state;

    let campaignContent = campaigns;

    try {
      const result = await fetchCampaigns(offset, limit);

      if (!!result) {
        result.map(campaign => {
          return campaignContent.push(campaign);
        });
      }
    } catch (e) {
      console.error(e);
    } finally {
      this.setState({
        campaigns: campaignContent,
        offset: offset,
        loading: false
      });
    }
  }

  render() {
    const { campaigns, loading } = this.state;

    const hasResults = !!campaigns && campaigns.length > 0;
    const showResults = hasResults && !loading;

    return (
      <div className="campaigns">
        {loading && <Loader />}

        {showResults && (
          <CampaignList data={campaigns} />
        )}
      </div>
    );
  }
}

export default CampaignContainer;
