import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import React, { PureComponent } from "react";
import CampaignName from "../CampaignName";

class ShowPriceModal extends PureComponent {
  static propTypes = {
    data: PropTypes.object.isRequired,
    onClose: PropTypes.func.isRequired
  };

  render() {
    const { data, onClose, ...others } = this.props;

    const dialogActions = [
      <Button
        primary={true}
        label="Save"
        onClick={onClose}
        style={{ marginRight: "0.5rem" }}
      />
    ];

    return (
      <Dialog
        actions={dialogActions}
        onClose={onClose}
        fullWidth={true}
        {...others}
      >
        <DialogTitle>
          <CampaignName data={data} />
        </DialogTitle>
        <DialogContent>{`$ ${data.price}`}</DialogContent>
      </Dialog>
    );
  }
}

export default ShowPriceModal;
