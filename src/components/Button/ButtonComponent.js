import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import SnackbarComponent from '../Snackbar/SnackbarComponent';

export default class ButtonComponent extends Component {
  constructor (props) {
    super(props);
    this.state = {
      snackMessage : ''
    }
  }

  buttonHandler = () => {
    this.props.buttonHandler();
  }

  render() {
    return (
      <React.Fragment>
      <Button variant="contained" color="secondary" onClick = {this.buttonHandler}>
        {this.props.value}
      </Button>
      <SnackbarComponent/>
      </React.Fragment>
    );
  }
}

ButtonComponent.defaultProps = {
  value: 'Submit'
};