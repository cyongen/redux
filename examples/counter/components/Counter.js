import React, { Component, PropTypes } from 'react';

export default class Counter extends Component {
  static propTypes = {
    increment: PropTypes.func.isRequired,
    incrementIfOdd: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    counter: PropTypes.number.isRequired
  };

  render() {
    const { increment, incrementIfOdd, decrement, counter } = this.props;
    return (
      <p>
        单击: {counter} 次
        {' '}
        <button onClick={increment}>加</button>
        {' '}
        <button onClick={decrement}>减</button>
        {' '}
        <button onClick={incrementIfOdd}>Increment if odd</button>
      </p>
    );
  }
}
