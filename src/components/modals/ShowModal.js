import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";
import React, { PureComponent } from "react";
import CampaignName from "../CampaignName";

class ShowModal extends PureComponent {
  static propTypes = {
    data: PropTypes.object.isRequired,
    type: PropTypes.string,
    onClose: PropTypes.func.isRequired
  };

  static defaultProps = {
    type: null
  };

  render() {
    const { data, type, onClose, ...others } = this.props;

    if (type === "price") {
      return (
        <Dialog onClose={onClose} fullWidth={true} {...others}>
          <DialogTitle>
            <CampaignName data={data} />
          </DialogTitle>
          <DialogContent>{`$ ${data.price}`}</DialogContent>{" "}
          <DialogActions>
            <Button variant="raised" color="primary" onClick={onClose}>
              SAVE
            </Button>
          </DialogActions>
        </Dialog>
      );
    }

    if (type === "date") {
      return (
        <Dialog onClose={onClose} fullWidth={true} {...others}>
          <DialogTitle>Schedule Date</DialogTitle>
          <DialogContent>
            <TextField
              id="date"
              label="Birthday"
              type="date"
              defaultValue="2017-05-24"
              InputLabelProps={{
                shrink: true
              }}
            />
          </DialogContent>
          <DialogActions>
            <Button variant="raised" color="primary" onClick={onClose}>
              SAVE
            </Button>
          </DialogActions>
        </Dialog>
      );
    }

    return null;
  }
}

export default ShowModal;
