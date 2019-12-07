import React, { Component } from "react";
import { fetchCampaignsByType } from "../resources/api";
import CampaignList from "./CampaignList";
import Loader from "./library/Loader";

class CampaignContainer extends Component {
  constructor(props) {
    super(props);

    this.refreshResults = this.refreshResults.bind(this);
  }

  state = {
    campaigns: [],
    offset: 0,
    loading: false
  };

  componentDidMount() {
    this.refreshResults();
  }

  async refreshResults(offset = 0) {
    const { campaigns } = this.state;
    const { type } = this.props;

    this.setState(prevState => ({ loading: true }));

    let campaignContent = campaigns;

    try {
      const result = await fetchCampaignsByType(type, offset);

      if (!!result) {
        result.map(campaign => {
          return campaignContent.push(campaign);
        });

        this.setState({
          campaigns: campaignContent,
          offset: offset,
          loading: false
        });
      }
    } catch (e) {
      console.error(e);
    }
  }

  render() {
    const { campaigns, loading } = this.state;

    const hasResults = !!campaigns && campaigns.length > 0;

    const showResults = hasResults && !loading;

    return (
      <div className="campaigns">
        {loading && <Loader />}

        {showResults && <CampaignList data={campaigns} />}
      </div>
    );
  }
}

export default CampaignContainer;
