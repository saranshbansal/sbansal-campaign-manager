import { withStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { dateDiffIndays } from "../resources/util";
import CampaignName from "./CampaignName";
import CustomLink from "./library/CustomLink";
import ShowModal from "./modals/ShowModal";

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

    this.handleShowPrice = this.handleShowPrice.bind(this);
    this.handleScheduleDate = this.handleScheduleDate.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  state = {
    open: false,
    type: null,
  };

  handleShowPrice() {
    this.setState({
      open: true,
      type: 'price',
    });
  }

  handleScheduleDate() {
    this.setState({
      open: true,
      type: 'date',
    });
  }

  handleClose() {
    this.setState({ open: false, type: null });
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
            <CustomLink label="View Pricing" onClick={this.handleShowPrice} />
          </TableCell>
          <TableCell>CSV</TableCell>
          <TableCell>Report</TableCell>
          <TableCell>
            <CustomLink
              label="Schedule Again"
              onClick={this.handleScheduleDate}
            />
          </TableCell>
        </TableRow>
        <ShowModal
          data={data}
          open={this.state.open}
          type={this.state.type}
          onClose={this.handleClose}
          maxWidth="sm"
        />
      </>
    );
  }
}

export default withStyles(styles)(Campaign);
