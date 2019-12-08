import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { dateDiffIndays } from "../resources/util";
import CampaignName from "./CampaignName";
import CustomLink from "./library/CustomLink";
import Icon from "./library/Icon";
import ModalRoot from "./modals/ModalRoot";

const styles = theme => ({
  date: {
    fontWeight: "bold"
  },
  daysToGo: {
    opacity: 0.6,
    fontWeight: "lighter",
    fontStyle: "italic"
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
    type: null
  };

  handleShowPrice() {
    this.setState({
      open: true,
      type: "price"
    });
  }

  handleScheduleDate() {
    this.setState({
      open: true,
      type: "date"
    });
  }

  handleClose() {
    this.setState({ open: false, type: null });
  }

  render() {
    const { data, changeDate, classes } = this.props;

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
            <Grid container spacing={8}>
              <Grid item>
                <Icon iconName="Price.png" />
              </Grid>
              <Grid item>
                <CustomLink
                  label="View Pricing"
                  onClick={this.handleShowPrice}
                />
              </Grid>
            </Grid>
          </TableCell>
          <TableCell>
            <Grid container spacing={8}>
              <Grid item>
                <Icon iconName="file.png" />
              </Grid>
              <Grid item>
                CSV
              </Grid>
            </Grid>
          </TableCell>
          <TableCell>
            <Grid container spacing={8}>
              <Grid item>
                <Icon iconName="statistics-report.png" />
              </Grid>
              <Grid item>
                Report
              </Grid>
            </Grid>
          </TableCell>
          <TableCell>
            <Grid container spacing={8}>
              <Grid item>
                <Icon iconName="calendar.png" />
              </Grid>
              <Grid item>
                <CustomLink
                  label="Schedule Again"
                  onClick={this.handleScheduleDate}
                />
              </Grid>
            </Grid>
          </TableCell>
        </TableRow>
        <ModalRoot
          data={data}
          open={this.state.open}
          type={this.state.type}
          onClose={this.handleClose}
          onSave={changeDate}
          maxWidth="sm"
        />
      </>
    );
  }
}

export default withStyles(styles)(Campaign);
