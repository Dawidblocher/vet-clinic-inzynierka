import React from 'react';
import { Formik, Form } from 'formik';
import Title from 'components/atoms/Title/Title';
import Button from 'components/atoms/Button/Button';
import TextInput from 'components/molecules/TextInput/TextInput';
import styled from 'styled-components';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import NewPasswordSchemaValidate from './NewPasswordSchemaValidate';

const NewPasswordForm = () => (
  <Formik
    initialValues={{
      password: '',
      passwordConfirmation: '',
    }}
    validationSchema={NewPasswordSchemaValidate}
    onSubmit={async (values) => {
      console.log(values);
    }}
  >
    {({ errors, touched }) => (
      <StyledForm>
        <Title textAlign="center">Ustaw nowe hasło</Title>
        <Paragraph marginBottom="3.6rem">Ustaw nowe hasło dla adresu e-mail: mail@com.</Paragraph>
        <TextInput
          name="password"
          placeholder="Hasło"
          type="password"
          valid={{ errors, touched }}
        />
        <TextInput
          name="passwordConfirmation"
          placeholder="Powtórz hasło"
          type="password"
          valid={{ errors, touched }}
          marginBottom="6.8rem"
        />

        <StyledFormFooter>
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
  justify-content: flex-end;
  align-items: center;
`;
export default NewPasswordForm;
