import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
const {REACT_APP_TEST_COMPONENTS}  = process.env;

if(REACT_APP_TEST_COMPONENTS) {
  import('./TestComponent')
  .then(component =>{
    const TestComponent = component.default;
    ReactDOM.render(<React.StrictMode><TestComponent /></React.StrictMode>, document.getElementById('root'));
  })
  .catch((error) => {
    console.error("Error in test component: ", error);
    ReactDOM.render(<div>Something went wrong in Test components</div>, document.getElementById("root"));})
} else {
  import('./App')
  .then(component =>{
    const App = component.default;
    ReactDOM.render(<React.StrictMode><App /></React.StrictMode>, document.getElementById('root'));
  })
  .catch((error) => {
    console.error("Error in Main app: ", error);
    ReactDOM.render(<div>Something went wrong in Main Application</div>, document.getElementById("root"));
  })
}



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
