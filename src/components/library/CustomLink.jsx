import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React, { Component } from "react";

const styles = theme => ({
  anchor: {
    cursor: 'pointer',
  }
});
class CustomLink extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { label, onClick } = this.props;
    onClick(label);
  }

  render() {
    const { label, classes } = this.props;

    return (
      <div className={classes.anchor} onClick={this.handleClick}>
        {label}
      </div>
    );
  }
}

export default withStyles(styles)(CustomLink);
