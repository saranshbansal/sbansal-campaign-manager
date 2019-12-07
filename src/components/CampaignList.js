import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import PropTypes from "prop-types";
import React, { Component } from "react";
import Campaign from "./Campaign";

const styles = () => ({
  table: {
    minWidth: "400px",
    overflowX: "hide"
  }
});
class CampaignList extends Component {
  static propTypes = {
    data: PropTypes.array
  };

  static defaultProps = {
    data: []
  };

  render() {
    const { data, changeDate, classes } = this.props;
    const hasData = !!data && data.length !== 0;

    if (!hasData) return `No Results.`;

    return (
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>DATE</TableCell>
            <TableCell>CAMPAIGN</TableCell>
            <TableCell>VIEW</TableCell>
            <TableCell colSpan={3}>ACTIONS</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(campaign => (
            <Campaign key={`${campaign._id}`} data={campaign} changeDate={changeDate} />
          ))}
        </TableBody>
      </Table>
    );
  }
}

export default withStyles(styles)(CampaignList);
