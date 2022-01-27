import * as Yup from 'yup';

const RemindPasswordSchemaValidate = Yup.object().shape({
  email: Yup.string().email('Zły format'),
});

export default RemindPasswordSchemaValidate;
