import React from "react";

export default class ClickCounter extends React.Component {
  render() {
    const { theme, switchTheme } = this.props;
    const style = theme === "dark" ? {
      backgroundColor: "black",
      color: "white",
    } : null;
    return (
      <div
        onClick={this.props.incrementCount}
        className="border border-red-700 h-96 w-96"
        style={style}
      >
        <h1>Clicked {this.props.count} times!</h1>
        <button className="bg-blue-500 text-yellow-100" onClick={switchTheme}>
          Switch Theme
        </button>
      </div>
    );
  }
}
