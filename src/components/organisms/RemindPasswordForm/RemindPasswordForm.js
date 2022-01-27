import React from 'react';
import { Formik, Form } from 'formik';
import Title from 'components/atoms/Title/Title';
import Button from 'components/atoms/Button/Button';
import TextInput from 'components/molecules/TextInput/TextInput';
import styled from 'styled-components';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Link from 'components/atoms/Link/Link';
import { logowanie } from 'router/AllRouteName';
import RemindPasswordSchemaValidate from './RemindPasswordSchemaValidate';

const RemindPasswordForm = () => (
  <Formik
    initialValues={{
      email: '',
    }}
    validationSchema={RemindPasswordSchemaValidate}
    onSubmit={async (values) => {
      console.log(values);
    }}
  >
    {({ errors, touched }) => (
      <StyledForm>
        <Title textAlign="center">Zapomniałeś hasła?</Title>
        <Paragraph marginBottom="3.4rem">Podaj adres e-mail, aby zresetować hasło.</Paragraph>
        <TextInput
          name="email"
          placeholder="E-mail"
          type="mail"
          autoComplete="email"
          valid={{ errors, touched }}
          marginBottom="7.4rem"
        />
        <StyledFormFooter>
          <Link to={logowanie.path}>Wróć do logowania</Link>
          <Button type="submit">Wyślij</Button>
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
export default RemindPasswordForm;
