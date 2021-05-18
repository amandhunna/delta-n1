import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { StateProvider } from "./context/StateProvider";
import reducer, { initialState } from "./context/reducer";
const { REACT_APP_TEST_COMPONENTS } = process.env;

if (REACT_APP_TEST_COMPONENTS) {
  import("./TestComponent")
    .then((component) => {
      const TestComponent = component.default;
      ReactDOM.render(
        <React.StrictMode>
          <StateProvider initialState={initialState} reducer={reducer}>
            <TestComponent />
          </StateProvider>
        </React.StrictMode>,
        document.getElementById("root")
      );
    })
    .catch(() => {
      ReactDOM.render(
        <div>Something went wrong in Test components</div>,
        document.getElementById("root")
      );
    });
} else {
  import("./App")
    .then((component) => {
      const App = component.default;
      ReactDOM.render(
        <React.StrictMode>
          <StateProvider initialState={initialState} reducer={reducer}>
            <App />
          </StateProvider>
        </React.StrictMode>,
        document.getElementById("root")
      );
    })
    .catch(() => {
      ReactDOM.render(
        <div>Something went wrong in Main Application</div>,
        document.getElementById("root")
      );
    });
}


reportWebVitals();
