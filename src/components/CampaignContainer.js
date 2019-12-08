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
    const { campaigns } = this.state;
    const { type } = this.props;

    this.setState(prevState => ({ loading: true }));

    let campaignContent = campaigns;

    try {
      const result = await fetchCampaignsByType(type);

      if (!!result) {
        result.map(campaign => {
          return campaignContent.push(campaign);
        });

        this.setState({
          campaigns: campaignContent,
          loading: false
        });
      }
    } catch (e) {
      console.error(e);
    }
  }

  async handleChangeDate(campaignId, selectedDate) {
    console.log("date", campaignId, typeof(selectedDate));

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
      <div className="campaigns">
        {loading && <Loader />}

        {!loading && (
          <CampaignList data={campaigns} changeDate={this.handleChangeDate} />
        )}
      </div>
    );
  }
}

export default CampaignContainer;
