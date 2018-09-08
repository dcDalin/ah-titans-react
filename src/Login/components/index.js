import React from 'react';
import PropTypes from 'prop-types';
import { Link, } from 'react-router-dom';
import {
  Col, Card, Row, Input, Button,
} from 'react-materialize';
import './index.scss';

const LoginForm = ({
  onClick, onChange, errors, isFetching,
}) => (
  <Row style={{ marginTop: '5%', }}>
    <Col m={6} s={12} offset="m3">
      <Card textClassName="blacktext" title="Login">
        <Row>
          <div className="error">{errors.error}</div>
          <Input
            type="email"
            label="Email"
            name="email"
            onChange={onChange}
            s={12}
          />
          <div className="error">{errors.email}</div>
          <Input
            type="password"
            label="password"
            name="password"
            onChange={onChange}
            s={12}
          />
          <div className="error">{errors.password}</div>
        </Row>
        <Row>
          <Col m={6} s={12}>
            <Button
              waves="light"
              className="emailLoginBtn"
              onClick={onClick}
              disabled={isFetching}
            >
              {isFetching ? 'Processing ...' : 'Login with email'}
            </Button>
          </Col>
          <Col m={6} s={12}>
            <p style={{ color: 'black', }}>
              Not a member?
              <Link to="/signup"> Signup</Link>
            </p>
          </Col>
        </Row>
        <Row>
          <Col m={6} s={12}>
            <Button
              waves="light"
              style={{ backgroundColor: 'red', }}
            >
            Login with google account
            </Button>
          </Col>
          <Col m={6} s={12}>
            <Button
              waves="light"
              style={{ backgroundColor: '#1aa3ff', }}
            >
            Login with facebook account
            </Button>
          </Col>
        </Row>
      </Card>
    </Col>
  </Row>
);

LoginForm.propTypes = {
  onClick: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.shape({
    error: PropTypes.array,
    email: PropTypes.array,
    password: PropTypes.array,
  }).isRequired,
  isFetching: PropTypes.bool.isRequired,
};

export default LoginForm;
