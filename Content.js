import { useContext } from "react";
import { Component } from "react";
import ClickCounter from "./ClickCounter";
import { ThemeContext } from "./contexts.js/ThemeContext";
import Counter from "./Counter";

/* 
// we can also use useContext hook to get the context in functional compo
// <ThemeContext.Provider> & <ThemeContext.Consumer> is also available in functional compo
function Component() {
  const { theme, switchTheme } = useContext(ThemeContext);
  console.log(theme, switchTheme);
  return "";
}
 */


export default class Content extends Component {
  // suppose i don't want to use the <ThemeContext.Consumer> and render props pattern to send the context vlaues to the target component
  // In this case we can use this
  componentDidMount() {
    // if we set the Content.contextType at the end of this file, we will get the context in this.context
    console.log(this.context);
  }

  render() {
    return (
      <div>
        <h1>This is a content. </h1>
        <Counter>
          {/* render props pattern for Counter to send necessary props to  ClickCounter*/}
          {({ count, incrementCount }) => (
            /* render props pattern for React.Consumer to send necessary props to  ClickCounter*/
            // Consumer of ThemeContext receives children and returns children which is function by giving the context value
            <ThemeContext.Consumer>
              {({ theme, switchTheme }) => (
                <ClickCounter
                  count={count}
                  incrementCount={incrementCount}
                  theme={theme}
                  switchTheme={switchTheme}
                />
              )}
            </ThemeContext.Consumer>
          )}
        </Counter>
      </div>
    );
  }
}

// First step to not using <ThemeContext.Consumer> and render props pattern
// Content.contextType sets the context to this.context of the Content class
Content.contextType = ThemeContext;
