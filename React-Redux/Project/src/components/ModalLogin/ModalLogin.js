import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import styles from './ModalLogin.module.css';
import Overlay from './Overlay/Overlay';
import Login from './Login/login';
import SignUp from './SignUp/SignUp';
import LanguageSwitch from './LanguageSwitch/LaguageSwitch';
import '../../utils/modalLogin/toogle';

const INITIALSTATE = {
  login: ``,
  password: ``,
  email: ``,
  errors: {
    isPasswordRight: true,
    isLoginRight: true,
    isPasswordOneWord: true,
    isLoginExist: false,
    isPasswordLengsOk: true,
    isLoginLengsOk: true,
    isAllInputFilled: true,
    isEmailValid: true,
  },
};

// errorMessage[lang][type][typeMessage]

const language = {
  eng: {
    errors: {
      password: {
        isPasswordOneWord: `Password must contain only one word`,
        isPasswordRight: `Invalid Password`,
      },
      email: {
        isEmailValid: `Email is not valid`,
      },
    },
    text: {
      signIn: `asdasd`,
    },
  },
  rus: {
    errors: {
      password: {
        isPasswordOneWord: `Пароль должен быть из одного слова`,
        passInvalid: `Invalid Password`,
      },
    },
    text: {
      signIn: `asdasd`,
    },
  },
};

class LoginModal extends Component {
  state = {
    ...INITIALSTATE,
    passwordLengthMustBe: 8,
    loginLengthMustBe: 4,
    isLoaderShowed: false,
    defaultLanguage: `eng`,
    rightPassword: `123`, // test backend
    loginsBD: [`asd`, `123`], // test backend
    containerStyles: [styles.container],
    err: {},
  };

  // componentDidUpdate = prevstate => {
  //   if (this.state.err !== prevstate.err) {
  //     this.setState(state => ({
  //       err: state.err,
  //     }));
  //   }
  // };

  toogleLogin = () => {
    const { containerStyles } = this.state;

    this.setState(state => ({
      ...state,
    }));

    if (containerStyles.length === 1) {
      this.setState(state => ({
        containerStyles: [
          ...state.containerStyles,
          styles[`right-panel-active`],
        ],
      }));
    } else {
      this.setState({
        containerStyles: [styles.container],
      });
    }
  };

  onInputLogin = e => {
    this.setState({ login: e.target.value });
  };

  onInputEmail = e => {
    this.setState({ email: e.target.value });
  };

  onInputPassword = e => {
    this.setState({ password: e.target.value });
  };

  toogleIsEverythinkOk = (type, key) => {
    this.setState(() => {
      const { defaultLanguage } = this.state;

      if (!key) {
        return {
          err: {},
        };
      }
      return {
        err: {
          [type]: language[defaultLanguage].errors[type][key],
        },
      };
    });
  };

  toogleIsPasswordRight = () => {
    this.setState(state => ({
      errors: {
        ...state.errors,
        isPasswordRight: !state.errors.isPasswordRight,
      },
    }));
  };

  toogleIsLoginExist = () => {
    this.setState(state => ({
      errors: {
        ...state.errors,
        isLoginExist: !state.errors.isLoginExist,
      },
    }));
  };

  toogleIsPasswordOneWord = () => {
    this.setState(state => ({
      errors: {
        ...state.errors,
        isPasswordOneWord: !state.errors.isPasswordOneWord,
      },
    }));
  };

  toogleIsPasswordLengsOk = () => {
    this.setState(state => ({
      errors: {
        ...state.errors,
        isPasswordLengsOk: !state.errors.isPasswordLengsOk,
      },
    }));
  };

  toogleIsAllInputFilled = () => {
    this.setState(state => ({
      errors: {
        ...state.errors,
        isAllInputFilled: !state.errors.isAllInputFilled,
      },
    }));
  };

  toogleIsLoginLengsOk = () => {
    this.setState(state => ({
      errors: {
        ...state.errors,
        isLoginLengsOk: !state.errors.isLoginLengsOk,
      },
    }));
  };

  toogleIsLoaderShowed = () => {
    this.setState(state => ({
      isLoaderShowed: !state.isLoaderShowed,
    }));
  };

  toogleIsEmailValid = () => {
    this.setState(state => ({
      errors: {
        ...state.errors,
        isEmailValid: !state.errors.isEmailValid,
      },
    }));
  };

  toogleLang = () => {
    const { defaultLanguage } = this.state;
    if (defaultLanguage === `eng`) {
      this.setState({
        defaultLanguage: `rus`,
      });
    }
    if (defaultLanguage === `rus`) {
      this.setState({
        defaultLanguage: `eng`,
      });
    }
  };

  signIn = () => {
    const { email, password, rightPassword, errors, err } = this.state;

    // Проверяем не пустые ли инпуты
    if (email === `` || password === ``) {
      return;
    }

    // Делаем валидацию Емейл
    // Если не валид то меняет стейт => Показывается <p> с ошибкой
    const validateEmail = m => {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(m);
    };

    if (!validateEmail(email)) {
      if (errors.isEmailValid) {
        this.toogleIsEmailValid();
        if (!err.email || err.email !== `isEmailValid`) {
          this.toogleIsEverythinkOk(`email`, `isEmailValid`);
        }
      }
      return;
    }
    // Если с емейлом все ок то убираем <p> если она была показана
    if (validateEmail(email) && errors.isEmailValid === false) {
      this.toogleIsEmailValid();
      if (err.email) {
        this.toogleIsEverythinkOk();
      }
    }

    // Проверяем что б пароль был из 1го слова,
    // Если больше то меняет стейт => Показывается <p> с ошибкой
    if (password.split(` `).length > 1) {
      if (errors.isPasswordOneWord === true) {
        this.toogleIsPasswordOneWord();
        if (!err.pas || err.pas !== `isPasswordOneWord`) {
          this.toogleIsEverythinkOk(`password`, `isPasswordOneWord`);
        }
        return;
      }
      return;
    }

    // Если пароль из 1го слова то убираем <p> если она была показа
    if (
      errors.isPasswordOneWord === false &&
      password.split(` `).length === 1
    ) {
      this.toogleIsPasswordOneWord();
      if (err.pas) {
        this.toogleIsEverythinkOk();
      }
    }

    // Проверяем Правильность пароля,
    // Если не правильные то меняет стейт => Показывается <p> с ошибкой
    this.toogleIsLoaderShowed();
    const user = {
      email,
      password,
    };
    console.log(user);

    setTimeout(() => {
      this.toogleIsLoaderShowed();

      if (rightPassword !== user.password) {
        if (!err.password || err.password !== `isPasswordRight`) {
          this.toogleIsEverythinkOk(`password`, `isPasswordRight`);
        }
        if (errors.isPasswordRight === true) {
          this.toogleIsPasswordRight();
          return;
        }
        return;
      }

      // Если пароль правильный то убираем <p> если она была показа
      if (errors.isPasswordRight === false && rightPassword === user.password) {
        this.toogleIsPasswordRight();
        if (err.password) {
          this.toogleIsEverythinkOk();
        }
      }
    }, 1000);
  };

  signUp = () => {
    const {
      email,
      password,
      login,
      loginsBD,
      errors,
      passwordLengthMustBe,
      loginLengthMustBe,
    } = this.state;

    if (email === `` && password === `` && login === ``) {
      if (errors.isAllInputFilled === true) {
        this.toogleIsAllInputFilled();
      }
      return;
    }
    if (
      email !== `` &&
      password !== `` &&
      login !== `` &&
      errors.isAllInputFilled === false
    ) {
      this.toogleIsAllInputFilled();
    }

    // Проверяем длину логина
    // Если меньше чем loginLengthMustBe то меняет стейт => Показывается <p> с ошибкой
    const loginLength = login.split(``).length;
    if (loginLength < loginLengthMustBe) {
      if (errors.isLoginLengsOk) {
        this.toogleIsLoginLengsOk();
      }
      return;
    }

    // Если логин равен или больше стейта loginLengthMustBe,
    // то убираем <p> если она была показа
    if (loginLength >= loginLengthMustBe && errors.isLoginLengsOk === false) {
      this.toogleIsLoginLengsOk();
    }

    // Проверяем свободный ли логин
    // Если занят то меняет стейт => Показывается <p> с ошибкой

    const isLoginExist = loginsBD.includes(login);
    if (isLoginExist) {
      if (errors.isLoginExist === false) {
        this.toogleIsLoginExist();
      }
      return;
    }
    // Если логин свободен то убираем <p> если она была показа
    if (!isLoginExist && errors.isLoginExist === true) {
      this.toogleIsLoginExist();
    }

    // Делаем валидацию Емейл
    // Если не валид то меняет стейт => Показывается <p> с ошибкой
    const validateEmail = m => {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(m);
    };

    if (!validateEmail(email)) {
      if (errors.isEmailValid) {
        this.toogleIsEmailValid();
      }
      return;
    }
    // Если с емейлом все ок то убираем <p> если она была показана
    if (validateEmail(email) && errors.isEmailValid === false) {
      this.toogleIsEmailValid();
    }

    if (password.split(` `).length > 1) {
      // Проверяем что б пароль был из 1го слова,
      // Если больше то меняет стейт => Показывается <p> с ошибкой
      if (errors.isPasswordOneWord === true) {
        this.toogleIsPasswordOneWord();
        return;
      }
      return;
    }

    // Если пароль из 1го слова то убираем <p> если она была показана
    if (
      errors.isPasswordOneWord === false &&
      password.split(` `).length === 1
    ) {
      this.toogleIsPasswordOneWord();
    }

    // Проверяем длину пароля, он должен быть больше чем стейт passwordLengthMustBe
    // Если меньше то меняет стейт => Показывается <p> с ошибкой
    const passLength = password.split(``).length;
    if (passLength < passwordLengthMustBe) {
      if (errors.isPasswordLengsOk === true) {
        this.toogleIsPasswordLengsOk();
      }
      return;
    }

    // Если пароль равен или больше стейта passwordLengthMustBe,
    // то убираем <p> если она была показа
    if (
      passLength >= passwordLengthMustBe &&
      errors.isPasswordLengsOk === false
    ) {
      this.toogleIsPasswordLengsOk();
    }

    const NewUser = {
      email,
      password,
      login,
    };

    console.log(NewUser);
  };

  render() {
    const {
      containerStyles,
      errors,
      isLoaderShowed,
      email,
      password,
      err,
    } = this.state;

    return (
      <div className={styles.wrapper}>
        <div className={containerStyles.join(` `)}>
          {/* <LanguageSwitch toogleLang={this.toogleLang} /> */}

          <Login
            isLoaderShowed={isLoaderShowed}
            onInputPassword={this.onInputPassword}
            onInputEmail={this.onInputEmail}
            signIn={this.signIn}
            email={email}
            password={password}
            err={err}
          />
          <SignUp
            errors={errors}
            onInputLogin={this.onInputLogin}
            onInputPassword={this.onInputPassword}
            onInputEmail={this.onInputEmail}
            signUp={this.signUp}
            email={email}
            password={password}
          />
          <Overlay
            toogleLogin={this.toogleLogin}
            toogleLang={this.toogleLang}
          />
        </div>
      </div>
    );
  }
}

export default LoginModal;
