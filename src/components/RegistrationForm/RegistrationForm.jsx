import { Button, TextField } from '@mui/material';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import styles from './RegistrationForm.module.css';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';

const userSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too short!')
    .max(15, 'Too long!')
    .required('Required'),
  email: Yup.string().email('Must be a valid email!').required('Required'),
  password: Yup.string().min(6, 'Too short!').required('Required'),
});

const fieldStyles = {
  '& fieldset': {
    color: '#ccc',
    borderColor: '#ccc',
    transition: 'border-color 0.3s ease-in-out',
  },
  '& input': {
    color: 'black',
  },
};

const RegistrationForm = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        onSubmit={values => {
          dispatch(register(values));
        }}
        validationSchema={userSchema}
      >
        <Form className={styles.form}>
          <div className={styles.field}>
            <Field
              name="name"
              type="text"
              as={TextField}
              required
              id="outlined-required-name"
              label="Name"
              InputLabelProps={{
                style: { color: '#ccc' },
              }}
              sx={fieldStyles}
            />
            <ErrorMessage name="name" component="p" />
          </div>

          <div className={styles.field}>
            <Field
              name="email"
              type="email"
              as={TextField}
              required
              id="outlined-required-email"
              label="Email"
              InputLabelProps={{
                style: { color: '#ccc' },
              }}
              sx={fieldStyles}
            />
            <ErrorMessage name="email" component="p" />
          </div>
          <div className={styles.field}>
            <Field
              name="password"
              type="password"
              as={TextField}
              required
              id="outlined-required-passw"
              label="Password"
              InputLabelProps={{
                style: { color: '#ccc' },
              }}
              sx={fieldStyles}
            />
            <ErrorMessage name="password" component="p" />
          </div>

          <Button
            variant="outlined"
            type="submit"
            sx={{ color: 'black', width: '150px' }}
          >
            Register
          </Button>
        </Form>
      </Formik>
    </>
  );
};
export default RegistrationForm;
