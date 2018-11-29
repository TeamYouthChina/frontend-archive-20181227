import React from 'react';
import PropTypes from 'prop-types';
import {TopBar} from '../module/top-bar';
import {languageHelper} from "../../tool/language-helper";

import {Layout, Menu, Breadcrumb} from 'antd';

import {Form, Icon, Input, Button, Checkbox} from 'antd';
import {TopProfile} from "../module/top-profile";


const {Header, Content, Footer} = Layout;

/* route: '/login' */

const i18n = [
  {
    login: '登陆界面',
    username: '用户名',
    password: '密码',
    button: '登陆'
  },
  {
    login: 'Login page',
    username: 'username',
    password: 'password',
    button: 'Login'
  }
];


const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    const {getFieldDecorator} = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit}
            style={{
              maxWidth: '300px'
            }}
      >
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{required: true, message: 'Please input your username!'}],
          })(
            <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>} placeholder="Username"/>
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{required: true, message: 'Please input your Password!'}],
          })(
            <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>} type="password"
                   placeholder="Password"/>
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>Remember me</Checkbox>
          )}
          <a
            style={{
              float: 'right'
            }}
            href="">Forgot password</a>
          <Button type="primary" htmlType="submit"
                  style={{
                    width: '100%'
                  }}
          >
            Log in
          </Button>
          Or <a href="">register now!</a>
        </FormItem>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);


class Login extends React.Component {
  constructor(props) {
    super(props);

    this.text = i18n[languageHelper(this.props.language)];
  }

  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#f7f7f7'
        }}
      >
        <TopBar language={this.props.language}/>
        <div
          style={{
            marginTop: '55px',
            display: 'flex',
            justifyContent: 'center'
          }}
        >

          <WrappedNormalLoginForm/>

        </div>
      </div>
    );
  };
}

Login.propTypes = {
  // route
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  // react
  language: PropTypes.string.isRequired
};

export {Login};
