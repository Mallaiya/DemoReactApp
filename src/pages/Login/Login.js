import React, { Component } from 'react';
import ButtonComponent from '../../components/Button/ButtonComponent';
import InputboxComponent from '../../components/InputBox/InputboxComponent';

import Grid from '@material-ui/core/Grid';

import './Login.css'

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }
  componentDidMount = () => {
    localStorage.getItem('isAuthenticate')
  }
  componentWillUnmount = () => {
    console.log('Component Destroyed');
  }
  setLoginData = ({name, value}) => {
    this.setState({
      [name]: value
    });
  }
  loginHandler = () => {
    const {email, password} = this.state;
    if(email === 'mallaiya@gmail.com' && password === '123') {
      localStorage.setItem('isAuthenticate', true);
    }else{
      
    }
  };  
  render() {
    return (
      <div className = "center">
        <Grid container item xs={12}>
          <Grid container item xs={12}>
            <InputboxComponent label="Email" type="text" id='email' name='email' setData = {this.setLoginData}/>
          </Grid>
          <Grid container item xs={12}>
            <InputboxComponent label="Password" type="password" id='password' name='password' setData = {this.setLoginData}/>
          </Grid>
          <Grid container item xs={12}>
            <ButtonComponent value="Login" buttonHandler = {this.loginHandler}/>
          </Grid>
        </Grid>
      </div>
    );
  }
}
