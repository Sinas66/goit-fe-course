import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { increment, decrement } from './countActions';
import Counter from '../../component/Counter/Counter';
import randomTodo from '../ToDo/RandomTodoActions';

class HomePage extends Component {
  state = {
    input: 1,
  };

  onInput = e => {
    this.setState({ input: Number(e.target.value) });
  };

  randomTodo = () => {
    const { todos, setRandomTodo } = this.props;
    let shuffleArr = new Array(...todos);
    shuffleArr = shuffleArr.sort(() => Math.random() - 0.5);
    shuffleArr.length = 1;

    setRandomTodo({
      title: shuffleArr[0].title,
      text: shuffleArr[0].text,
      id: Date.now(),
    });
  };

  render() {
    const { counter, onInceremt, onDecrement, todos, todoRandom } = this.props;
    const { input } = this.state;
    return (
      <div>
        <h1>Hello</h1>
        <div>
          <input type="number" defaultValue="1" onChange={this.onInput} />
        </div>
        <button type="button" onClick={() => onDecrement(input)}>
          -
        </button>
        <span>{counter}</span>
        <button type="button" onClick={() => onInceremt(input)}>
          +
        </button>
        <Counter />
        {todos.length > 0 ? (
          <div>
            {todoRandom.text ? (
              <div>
                <h2>{todoRandom.title}</h2>
                <p>{todoRandom.text}</p>
              </div>
            ) : null}
            <button type="button" onClick={this.randomTodo}>
              Show random
            </button>
          </div>
        ) : null}
      </div>
    );
  }
}

const stateToProps = state => ({
  counter: state.counter,
  todos: state.todos,
  todoRandom: state.todoRandom,
});

const dispatchToProp = dispatch => ({
  onInceremt(count) {
    dispatch(increment(count));
  },
  onDecrement(count) {
    dispatch(decrement(count));
  },
  setRandomTodo(obj) {
    dispatch(randomTodo(obj));
  },
});

export default connect(
  stateToProps,
  dispatchToProp,
)(HomePage);

HomePage.propTypes = {
  counter: PropTypes.number.isRequired,
  onInceremt: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  setRandomTodo: PropTypes.func.isRequired,
  todoRandom: PropTypes.shape({}).isRequired,
};
