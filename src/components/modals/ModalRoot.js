import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import PropTypes from "prop-types";
import React, { PureComponent } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CampaignName from "../CampaignName";

class ModalRoot extends PureComponent {
  static propTypes = {
    data: PropTypes.object.isRequired,
    type: PropTypes.string,
    onClose: PropTypes.func.isRequired
  };

  static defaultProps = {
    type: null
  };

  constructor(props) {
    super(props);

    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleSaveDate = this.handleSaveDate.bind(this);
  }

  state = {
    startDate: new Date()
  };

  componentDidMount() {
    const { data } = this.props;
    const eventDate = new Date(data.createdOn);

    this.setState({
      startDate: eventDate
    });
  }

  handleDateChange(date) {
    this.setState({
      startDate: date
    });
  }

  handleSaveDate() {
    const { data, onSave, onClose } = this.props;
    const { startDate } = this.state;
    const campaignId = data._id;

    onSave(campaignId, startDate);
    onClose();
  }

  render() {
    const { data, type, onClose, onSave, ...others } = this.props;

    if (type === "price") {
      return (
        <Dialog onClose={onClose} fullWidth={true} {...others}>
          <DialogTitle>
            <CampaignName data={data} />
          </DialogTitle>
          <DialogContent>{`$ ${data.price}`}</DialogContent>{" "}
          <DialogActions>
            <Button variant="contained" color="primary" onClick={onClose}>
              Close
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
            <DatePicker
              selected={this.state.startDate}
              onChange={this.handleDateChange}
            />
          </DialogContent>
          <DialogActions>
            <Button
              variant="contained"
              color="primary"
              onClick={this.handleSaveDate}
            >
              SAVE
            </Button>
          </DialogActions>
        </Dialog>
      );
    }

    return null;
  }
}

export default ModalRoot;
