import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import PropTypes from "prop-types";
import React, { Component } from "react";
import Locales from "../resources/locales";
import Campaign from "./Campaign";
import LocalizationContext from "./context/LocalizationContext";

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

    return (
      <LocalizationContext.Consumer>
        {context => (
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>{Locales.columns[0]}</TableCell>
                <TableCell>{Locales.columns[1]}</TableCell>
                <TableCell>{Locales.columns[2]}</TableCell>
                <TableCell colSpan={3}>{Locales.columns[3]}</TableCell>
              </TableRow>
            </TableHead>
            {hasData && (
              <TableBody>
                {data.map(campaign => (
                  <Campaign
                    key={`${campaign._id}`}
                    data={campaign}
                    changeDate={changeDate}
                  />
                ))}
              </TableBody>
            )}
          </Table>
        )}
      </LocalizationContext.Consumer>
    );
  }
}

export default withStyles(styles)(CampaignList);
