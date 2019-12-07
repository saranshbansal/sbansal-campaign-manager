import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { dateDiffIndays } from "../resources/util";

const styles = () => ({
  name: {
    fontWeight: "bold"
  },
  region: {
    opacity: 0.6,
    fontWeight: "lighter"
  },
  date: {
    fontWeight: "bold"
  },
  daysToGo: {
    opacity: 0.6,
    fontWeight: "lighter"
  }
});
class Campaign extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired
  };

  render() {
    const { data, classes } = this.props;

    const eventDate = new Date(data.createdOn);
    const dateFormatted = eventDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric"
    });

    const daysToGo = dateDiffIndays(new Date(), eventDate);

    const dateCellJsx = (
      <>
        <div className={classes.date}>{dateFormatted}</div>
        <div className={classes.daysToGo}>
          {daysToGo > 0
            ? `${Math.abs(daysToGo)} days ahead`
            : `${Math.abs(daysToGo)} days ago`}
        </div>
      </>
    );

    const campaignCellJsx = (
      <>
        <div className={classes.name}>{data.name}</div>
        <div className={classes.region}>{data.region}</div>
      </>
    );

    return (
      <TableRow hover={true}>
        <TableCell>{dateCellJsx}</TableCell>
        <TableCell>{campaignCellJsx}</TableCell>
        <TableCell>
          <span>View Pricing</span>
        </TableCell>
        <TableCell>CSV</TableCell>
        <TableCell>Report</TableCell>
        <TableCell>Schedule Again</TableCell>
      </TableRow>
    );
  }
}

export default withStyles(styles)(Campaign);
