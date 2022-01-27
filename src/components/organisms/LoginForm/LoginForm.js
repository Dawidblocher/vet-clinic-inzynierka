import React from 'react';
import { Formik, Form } from 'formik';
import Title from 'components/atoms/Title/Title';
import Button from 'components/atoms/Button/Button';
import Link from 'components/atoms/Link/Link';
import Checkbox from 'components/molecules/Checkbox/Checkbox';
import TextInput from 'components/molecules/TextInput/TextInput';
import styled from 'styled-components';
import { przypomnijHaslo } from 'router/AllRouteName';
import LoginSchemaValidate from './LoginSchemaValidate';

const LoginForm = () => (
  <Formik
    initialValues={{
      remember: false,
      firstName: '',
      email: '',
    }}
    validationSchema={LoginSchemaValidate}
    onSubmit={async (values) => {
      console.log(values);
    }}
  >
    {({ errors, touched }) => (
      <StyledForm>
        <Title textAlign="center">Zaloguj się</Title>

        <TextInput
          name="email"
          placeholder="E-mail"
          type="mail"
          autoComplete="email"
          valid={{ errors, touched }}
        />
        <TextInput
          name="firstName"
          placeholder="Hasło"
          type="password"
          autoComplete="password"
          valid={{ errors, touched }}
          marginBottom="1.6rem"
        />

        <Checkbox name="remember" label="Zapamiętaj mnie" marginBottom="3.6rem" />
        <StyledFormFooter>
          <Link to={przypomnijHaslo.path}>Zapomniałeś hasła?</Link>
          <Button type="submit">Zaloguj się</Button>
        </StyledFormFooter>
      </StyledForm>
    )}
  </Formik>
);
const StyledForm = styled(Form)`
  max-width: 502px;
  width: 100%;
  padding: 15px;
  margin: 0 auto;
`;

const StyledFormFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export default LoginForm;
