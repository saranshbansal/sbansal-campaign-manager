export const CAMPAIGNS = `api/campaigns`;

export const fetchCampaigns = async (offset, limit) => {
  const url = `${CAMPAIGNS}`;

  try {
    const response = await fetch(url);

    return await response.json();
  } catch (e) {
    console.error(e);
  }

  return null;
};
