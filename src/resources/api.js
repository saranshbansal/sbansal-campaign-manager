import { dateDiffIndays } from "./util";
export const GET_CAMPAIGNS = `api/campaigns`;
export const UPDATE_CAMPAIGN = `api/campaign`;

export const fetchCampaigns = async () => {
  const url = `${GET_CAMPAIGNS}`;

  try {
    const response = await fetch(url);

    return await response.json();
  } catch (e) {
    console.error(e);
  }

  return null;
};

export const fetchCampaignsByType = async type => {
  const url = `${GET_CAMPAIGNS}`;

  try {
    const response = await fetch(url);

    let results = await response.json();

    results = results.filter(campaign => {
      const eventDate = new Date(campaign.createdOn);
      const daysToGo = dateDiffIndays(new Date(), eventDate);

      switch (type) {
        case "U":
          return daysToGo > 0;

        case "L":
          return daysToGo === 0;

        case "P":
          return daysToGo < 0;
        default:
          return true;
      }
    });

    return results;
  } catch (e) {
    console.error(e);
  }

  return null;
};

export const updateCampaign = async (type, id, data) => {
  const url = `${UPDATE_CAMPAIGN}/${id}`;

  try {
    const response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    });

    return await response.json();;
  } catch (e) {
    console.error(e);
  }

  return null;
};
