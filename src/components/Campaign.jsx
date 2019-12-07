import { withStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import PropTypes from "prop-types";
import React, { Component } from "react";
import CampaignName from "./CampaignName";
import { dateDiffIndays } from "../resources/util";
import CustomLink from "./library/CustomLink";
import ShowPriceModal from "./modals/ShowPriceModal";

const styles = theme => ({
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

  constructor() {
    super();

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  state = {
    open: false
  };

  handleShow() {
    this.setState({
      open: true
    });
  }

  handleClose() {
    this.setState({ open: false });
  }

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

    return (
      <>
        <TableRow hover={true}>
          <TableCell>{dateCellJsx}</TableCell>
          <TableCell>
            <CampaignName data={data} />
          </TableCell>
          <TableCell>
            <CustomLink label="View Pricing" onClick={this.handleShow} />
          </TableCell>
          <TableCell>CSV</TableCell>
          <TableCell>Report</TableCell>
          <TableCell>Schedule Again</TableCell>
        </TableRow>
        <ShowPriceModal
          data={data}
          open={this.state.open}
          onClose={this.handleClose}
          maxWidth="sm"
        />
      </>
    );
  }
}

export default withStyles(styles)(Campaign);
