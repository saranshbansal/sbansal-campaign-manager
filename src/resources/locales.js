import LocalizedStrings from "react-localization";

let Locales = new LocalizedStrings({
  en: {
    header: "Campaign Manager",
    heading: "Manage Campaigns",
    tabNames: {
      U: "Upcoming Campaigns",
      L: "Live Campaigns",
      P: "Past Campaigns"
    },
    columns: ["DATE", "CAMPAIGN", "VIEW", "ACTIONS"],
    choice: "How to choose the egg"
  },
  de: {
    header: "Campaign Manager (DE)",
    heading: "Manage Campaigns (DE)",
    tabNames: {
      U: "Upcoming Campaigns (DE)",
      L: "Live Campaigns (DE)",
      P: "Past Campaigns (DE)"
    },
    columns: ["DATE (DE)", "CAMPAIGN (DE)", "VIEW (DE)", "ACTIONS (DE)"],
    choice: "Come scegliere l'uovo"
  }
});

export default Locales;
