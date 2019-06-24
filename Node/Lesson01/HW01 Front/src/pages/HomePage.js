import React, { Component } from 'react';
import styles from './HomePage.module.css';
import NewUser from '../components/NewUser/NewUser';

const singup = `http://localhost:8081/singup`;
const user = `http://localhost:8081/users`;

class HomePage extends Component {
  state = {
    username: ``,
    password: ``,
    email: ``,
    phone: ``,
    userCreated: {},
  };

  signUp = e => {
    e.preventDefault();
    const { username, password, phone, email } = this.state;
    const newUser = {
      username,
      password,
      phone,
      email,
    };
    console.log(`its a new user`, newUser);

    fetch(singup, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser), // тип данных в body должен соответвовать значению заголовка "Content-Type"
    })
      .then(response => response.json())
      .then(data => {
        console.log(`resp from server`, data);

        this.setState({
          userCreated: { ...data },
        });
      });
  };

  showUsers = () => {
    return fetch(user)
      .then(resp => console.log(`resp`, resp))
      .catch(data => console.error(`error blyat`, data));
  };

  onInputLogin = e => {
    console.log(e.target.value);
    this.setState({ username: e.target.value });
  };

  onInputPassword = e => {
    console.log(e.target.value);
    this.setState({ password: e.target.value });
  };

  onInputEmail = e => {
    console.log(e.target.value);
    this.setState({ email: e.target.value });
  };

  onInputPhone = e => {
    console.log(e.target.value);
    this.setState({ phone: e.target.value });
  };

  render() {
    const { userCreated } = this.state;
    return (
      <>
        <form action="" className={styles.form}>
          <h1>Регистрация</h1>
          <div className={styles[`form-wrapper`]}>
            <input
              type="text"
              className={styles.input}
              onChange={this.onInputLogin}
            />
          </div>
          <div className={styles[`form-wrapper`]}>
            <input
              type="password"
              className={styles.input}
              onChange={this.onInputPassword}
            />
          </div>
          <div className={styles[`form-wrapper`]}>
            <input
              type="number"
              className={styles.input}
              onChange={this.onInputPhone}
            />
          </div>
          <div className={styles[`form-wrapper`]}>
            <input
              type="email"
              className={styles.input}
              onChange={this.onInputEmail}
            />
          </div>
          <div className={styles[`form-wrapper`]}>
            <button type="submit" onClick={this.signUp}>
              Регистрация
            </button>
            <button type="button" onClick={this.showUsers}>
              Пользователи
            </button>
          </div>
        </form>
        <NewUser userCreated={userCreated} />
      </>
    );
  }
}

export default HomePage;
