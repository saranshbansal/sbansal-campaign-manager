import AppBar from "@material-ui/core/AppBar";
import Divider from "@material-ui/core/Divider";
import { withStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import React from "react";
import Locales from "../resources/locales";
import LocalizationContext from "./context/LocalizationContext";
import LanguageOptions from "./LanguageOptions";

const styles = {
  root: {
    flexGrow: 1
  },
  toolbarButtons: {
    marginLeft: "auto",
    marginRight: -12
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
                {Locales.header}
              </Typography>
              <Divider variant="middle" />
              <span className={classes.toolbarButtons}>
                <Typography variant="h6" color="inherit">
                  <LanguageOptions handleLanguageChange={context.handleLanguageChange} />
                </Typography>
              </span>
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
