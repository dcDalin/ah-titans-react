import React from 'react';
import PropTypes from 'prop-types';
import { Link, } from 'react-router-dom';
import {
  Button, Card, Row, Col, Input,
} from 'react-materialize';
import './Signup.scss';

const SignupForm = ({
  onChange, onClick, error, isFetching, successMessage, items,
}) => (
  <div style={{ marginTop: '10%', }}>
    <Row>
      <Col s={8} offset="s2">
        <Card textClassName="black-text" title="Sign up">
          <Row>
            <Row>
              <Col s={6}>
                <Input s={12} label="Username:" onChange={onChange} name="username" />
                <div className="error">{error ? error.username : ''}</div>
              </Col>
              <Col s={6}>
                <Input s={12} type="email" label="Email:" onChange={onChange} name="email" />
                <div className="error">{error ? error.email : ''}</div>
              </Col>
            </Row>
            <Row>
              <Col s={6}>
                <Input
                  s={12}
                  type="password"
                  label="Password:"
                  onChange={onChange}
                  name="password"
                />
                <div className="error">{error ? error.password : ''}</div>
              </Col>
              <Col s={6}>
                <Input
                  s={12}
                  type="password"
                  label="Repeat password:"
                  onChange={onChange}
                  name="password"
                />
                <div className="error">{error ? error.password : ''}</div>
              </Col>
            </Row>
            <Col s={6}>
              <Button s={6} className="blue" waves="light" onClick={onClick} disabled={isFetching}>
                {isFetching ? 'SIGNING UP...' : 'SIGNUP'}
              </Button>
            </Col>
            <Col s={6}>
              Have an Account?
              <Link to="/login">Login</Link>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  </div>
);

SignupForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SignupForm;
