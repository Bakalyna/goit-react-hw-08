import { ErrorMessage, Field, Form, Formik } from 'formik';

import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { Button, TextField } from '@mui/material';
import styles from './LoginForm.module.css';
import { login } from '../../redux/auth/operations';

const userSchema = Yup.object().shape({
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

const LoginForm = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={values => {
          dispatch(login(values));
        }}
        validationSchema={userSchema}
      >
        <Form className={styles.form}>
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
            Login
          </Button>
        </Form>
      </Formik>
    </>
  );
};
export default LoginForm;
