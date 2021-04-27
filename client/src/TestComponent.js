function TestComponent() {
    const {REACT_APP_TEST_COMPONENTS, REACT_APP_REACT_ENV}  = process.env;
  return (
    <div> Test component : {REACT_APP_REACT_ENV} {REACT_APP_TEST_COMPONENTS}
    </div>
  );
}

export default TestComponent;
