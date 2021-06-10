import React from "react";
import ReactDOM from "react-dom";
import {Elements} from '@stripe/react-stripe-js';
import { loadStripe } from "@stripe/stripe-js";
import { StateProvider } from "./context/StateProvider";
import reducer, { initialState } from "./context/reducer";
import "./index.css";

const { REACT_APP_TEST_COMPONENTS, REACT_APP_STRIPE_PUBLIC_KEY } = process.env;

const stripePromise = loadStripe(REACT_APP_STRIPE_PUBLIC_KEY);

if (REACT_APP_TEST_COMPONENTS) {
  import("./TestComponent")
    .then((component) => {
      const TestComponent = component.default;
      ReactDOM.render(
        <React.StrictMode>
          <StateProvider initialState={initialState} reducer={reducer}>
            <Elements stripe={stripePromise}>
              <TestComponent />
            </Elements>
          </StateProvider>
        </React.StrictMode>,
        document.getElementById("root")
      );
    })
    .catch((error) => {
      console.error("error in the testComponent", error)
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
            <Elements stripe={stripePromise}>
              <App />
            </Elements>
          </StateProvider>
        </React.StrictMode>,
        document.getElementById("root")
      );
    })
    .catch((error) => {
      console.error("error in the testComponent", error)
      ReactDOM.render(
        <div>Something went wrong in Main Application</div>,
        document.getElementById("root")
      );
    });
}
