import React, { Component } from 'react';
import randomId from 'uuid/v1';
import Controls from './Controls/Controls';
import Balance from './Balance/Balance';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import styles from './Dashboard.module.css';
import historyStyles from './TransactionHistory/TransactionHistory.module.css';

class Dashboard extends Component {
  state = {
    history: [],
    balance: 0,
    input: 0,
    deposit: 0,
    withdraw: 0,
    operation: ``,
  };

  deposit = e => {
    const operation = e.target.innerHTML;
    this.setState(state => ({
      deposit: state.deposit + state.input,
      balance: state.balance + state.input,
      operation,
    }));
    this.addTransaction();
  };

  withdraw = e => {
    if (this.state.balance < this.state.input) {
      alert(`Не хватает бабок! Максимум можете снять ${this.state.balance}`);
      return;
    }
    const operation = e.target.innerHTML;
    this.setState(state => ({
      withdraw: state.withdraw + state.input,
      balance: state.balance - state.input,
      operation,
    }));

    this.addTransaction();
  };

  input = e => this.setState({ input: Number(e.target.value) });

  addTransaction = () => {
    const now = new Date();
    const d = now.getDate();
    const mm = now.getMonth() + 1;
    const y = now.getFullYear();
    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();

    this.setState(state => ({
      history: [
        ...state.history,
        {
          id: randomId(),
          type: state.operation,
          amount: state.input,
          date: `${d}/${mm}/${y}, ${h}:${m}:${s}`,
          // date: new Date().toLocaleString(),
        },
      ],
    }));
  };

  render() {
    const { history, balance, withdraw, deposit } = this.state;
    return (
      <div className={styles.dashboard}>
        <Controls
          deposit={this.deposit}
          withdraw={this.withdraw}
          input={this.input}
        />
        <Balance balance={balance} deposit={deposit} withdraw={withdraw} />

        {history.length > 0 ? (
          <table className={historyStyles.history}>
            <thead>
              <tr>
                <th>Transaction</th>
                <th>Amount</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {history.map(elem => (
                <TransactionHistory key={elem.id} {...elem} />
              ))}
            </tbody>
          </table>
        ) : null}
      </div>
    );
  }
}

export default Dashboard;
