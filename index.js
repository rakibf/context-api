// import the context from context folder
import { ThemeContext } from "./contexts.js/ThemeContext";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Section from "./Section";
const root = ReactDOM.createRoot(document.getElementById("root"));

class App extends React.Component {
  // suppose i have a value in App component that I want to send without prop drilling to any child of Section Component
  state = {
    theme: "dark",
    switchTheme: () => {
      this.setState((prevState) => ({
        theme: prevState.theme === "dark" ? "light" : "dark",
      }));
    },
  };
  render() {
    return (
      // ThemeContext calls the createContext() in contexts folder and returns two components
      // one of them is Provider that recieves the value prop and children
      // by receiving the value prop it sets the context value and returns the children

      // if app component re-renders and you send an object to the context using Provider component. Everytime you will send different reference of the object as a value prop of provider. So consumers will re-render as well. To stop unexpected re-render. Send from state.
      <ThemeContext.Provider
        value={{ theme: this.state.theme, switchTheme: this.state.switchTheme }}
      >
        <Section />
      </ThemeContext.Provider>
    );
  }
}

root.render(
  <div>
    <App />
  </div>
);

reportWebVitals();
