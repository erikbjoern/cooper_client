import React from "react";
import {Container, Button, Form} from 'semantic-ui-react'

const LoginForm = ({ submitFormHandler }) => {
  return (
    <Container>
      <Form onSubmit={submitFormHandler} id="login-form">
        <Form.Group inline>
        <Form.Field>
          <label>Email</label>
          <input name="email" type="email" id="email"></input>
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input name="password" type="password" id="password"></input>
        </Form.Field>
        <Button basic id="submit">Submit</Button>
      </Form.Group>
      </Form>
    </Container>
  );
};
export default LoginForm;