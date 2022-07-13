import { Component } from "react";

export default class Counter extends Component {
  state = {
    count: 0,
  };

  incrementCount = () => {
    this.setState((prevState) => ({ count: ++prevState.count }));
  };

  render() {
    return this.props.children({
      count: this.state.count,
      incrementCount: this.incrementCount,
    });
  }
}