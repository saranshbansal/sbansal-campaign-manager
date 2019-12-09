import React, { Component } from "react";
import { fetchCampaignsByType, updateCampaign } from "../resources/api";
import CampaignList from "./CampaignList";
import Loader from "./library/Loader";

class CampaignContainer extends Component {
  constructor(props) {
    super(props);

    this.refreshResults = this.refreshResults.bind(this);
    this.handleChangeDate = this.handleChangeDate.bind(this);
  }

  state = {
    campaigns: [],
    loading: false
  };

  componentDidMount() {
    this.refreshResults();
  }

  async refreshResults() {
    const { type } = this.props;

    this.setState(prevState => ({ loading: true }));

    let campaigns = [];

    try {
      const results = await fetchCampaignsByType(type);

      if (!!results) {
        results.map(campaign => {
          return campaigns.push(campaign);
        });

        this.setState(prevState => ({
          campaigns,
          loading: false
        }));
      }
    } catch (e) {
      this.setState(prevState => ({ loading: false }));
    }
  }

  async handleChangeDate(campaignId, selectedDate) {
    const { type } = this.props;

    const updatedCampaign = { createdOn: selectedDate.getTime() };

    try {
      const result = await updateCampaign(type, campaignId, updatedCampaign);

      if (!!result) {
        this.refreshResults();
      }
    } catch (e) {
      console.error(e);
    }
  }

  render() {
    const { campaigns, loading } = this.state;

    return (
      <>
        {loading && <Loader />}

        {!loading && (
          <CampaignList data={campaigns} changeDate={this.handleChangeDate} />
        )}
      </>
    );
  }
}

export default CampaignContainer;
