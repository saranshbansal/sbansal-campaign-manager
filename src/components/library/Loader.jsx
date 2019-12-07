import CircularProgress from "@material-ui/core/CircularProgress";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";

const styles = theme => ({
  root: {
    textAlign: "center"
  },
  progress: {
    margin: theme.spacing.unit * 2
  }
});

const Loader = props => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <CircularProgress className={classes.progress} />
    </div>
  );
};

Loader.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Loader);
