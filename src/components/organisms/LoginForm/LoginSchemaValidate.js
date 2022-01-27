import * as Yup from 'yup';

const LoginSchemaValidate = Yup.object().shape({
  email: Yup.string().email('Zły format'),
});

export default LoginSchemaValidate;
