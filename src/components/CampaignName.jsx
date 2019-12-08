import { withStyles } from "@material-ui/core/styles";
import React from "react";

const styles = theme => ({
  name: {
    fontWeight: "bold"
  },
  region: {
    opacity: 0.6,
    fontWeight: "lighter",
    fontStyle: "italic"
  }
});
const CampaignName = props => {
  return (
    <>
      <div className={props.classes.name}>{props.data.name}</div>
      <div className={props.classes.region}>{props.data.region}</div>
    </>
  );
};

export default withStyles(styles)(CampaignName);
