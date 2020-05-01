import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';

export class InputboxComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <TextField
          required
          id={this.props.id}
          name={this.props.name}
          label={this.props.label}
          type={this.props.type}
          onChange={(event) => {
            const {
              target: { name, value },
            } = event;
            this.props.setData({name, value});
          }}
        />
      </React.Fragment>
    );
  }
}

InputboxComponent.defaultProps = {
  type: 'text',
  label: 'Email',
  id: 'email',
  name: 'email'
};

export default InputboxComponent;
