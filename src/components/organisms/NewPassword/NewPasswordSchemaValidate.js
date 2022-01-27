import * as Yup from 'yup';

const RegisterSchemaValidate = Yup.object({
  password: Yup.string().required('Pole wymagane'),
  passwordConfirmation: Yup.string().oneOf([Yup.ref('password'), null], 'Hasło się nie zgadza'),
});

export default RegisterSchemaValidate;
