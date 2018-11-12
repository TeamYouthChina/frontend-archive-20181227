import React from 'react';

import {store} from '../data/store';
import * as actionJs from '../data/action';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.emailChange = this.emailChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  emailChange(e) {
    this.setState({email: e.target.value});
  }

  passwordChange(e) {
    this.setState({password: e.target.value});
  }

  submit() {
    store.dispatch(actionJs.creator(
      actionJs.type.saga.login,
      {
        email: this.state.email,
        password: this.state.password
      }
    ));
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <input
          id='email'
          placeholder='Email'
          onChange={this.emailChange}
        />
        <br/>
        <br/>
        <input
          id='password'
          type='password'
          placeholder='Password'
          onChange={this.passwordChange}
        />
        <br/>
        <br/>
        <button
          style={{marginBottom: '10px'}}
          onClick={this.submit}
        >
          Submit
        </button>
      </div>
    );
  }
}

Login.propTypes = {};

export {Login};
