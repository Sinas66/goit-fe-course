import React from 'react';
import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styles from '../ModalLogin.module.css';

const SignUp = ({
  onInputLogin,
  onInputPassword,
  onInputEmail,
  signUp,
  errors,
  password,
  email,
}) => {
  return (
    <div
      className={[styles[`form-container`], styles[`sign-up-container`]].join(
        ` `,
      )}
    >
      <form action="#">
        <h1>Create Account</h1>
        {errors.isLoginExist && <p>This login already exists </p>}
        {!errors.isAllInputFilled && <p>All fields must be filled </p>}
        {!errors.isLoginLengsOk && (
          <p>Login must be at least 4 characters long</p>
        )}

        <TextField
          id="outlined-name"
          label="Login"
          // className={useStyles.textField}
          onChange={onInputLogin}
          margin="normal"
          variant="outlined"
        />

        {!errors.isEmailValid && <p>Email is not valid</p>}

        <TextField
          id="outlined-name"
          label="Email"
          // className={useStyles.textField}
          onChange={onInputEmail}
          margin="normal"
          variant="outlined"
          value={email}
        />
        {!errors.isPasswordOneWord && (
          <p>Password must contain only one word</p>
        )}

        {!errors.isPasswordLengsOk && (
          <p>Passwords must be at least 8 characters long </p>
        )}

        <TextField
          id="outlined-name"
          label="Password"
          // className={useStyles.textField}
          onChange={onInputPassword}
          margin="normal"
          variant="outlined"
          value={password}
        />
        <Button
          color="secondary"
          // className={[classes.button, styles.ghost].join(` `)}
          id="signUp"
          onClick={signUp}
          size="large"
        >
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default SignUp;

SignUp.propTypes = {
  onInputLogin: PropTypes.func.isRequired,
  onInputPassword: PropTypes.func.isRequired,
  onInputEmail: PropTypes.func.isRequired,
  signUp: PropTypes.func.isRequired,
  errors: PropTypes.shape({}).isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
};
