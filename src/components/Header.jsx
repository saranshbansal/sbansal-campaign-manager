import AppBar from "@material-ui/core/AppBar";
import Divider from "@material-ui/core/Divider";
import { withStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import React from "react";
import Language from "./Language";
import LocalizationContext from "./context/LocalizationContext";

const styles = {
  root: {
    flexGrow: 1
  }
};

function Header(props) {
  const { classes } = props;

  return (
    <LocalizationContext.Consumer>
      {context => (
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar variant="dense">
              <Typography variant="h6" color="inherit">
                Campaign Manager
              </Typography>
              <Divider variant="middle" />
              <Typography variant="h6" color="inherit">
                <Language handleLanguageChange={context.handleLanguageChange} />
              </Typography>
            </Toolbar>
          </AppBar>
        </div>
      )}
    </LocalizationContext.Consumer>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);
