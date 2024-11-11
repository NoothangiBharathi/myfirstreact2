// Import necessary libraries
import React, { useEffect } from 'react';

// Define the HOC
const withLogger = (WrappedComponent) => {
  return (props) => {
    useEffect(() => {
      console.log("Current Props:", props); // Logs props when the component is rendered or updated
    }, [props]); // Re-run effect when props change

    return <WrappedComponent {...props} />; // Pass all props down to the wrapped component
  };
};

// Define a basic component
const Hello = ({ name }) => {
  return <h1>Hello, {name}!</h1>;
};

// Enhance the Hello component with the withLogger HOC
const HelloWithLogger = withLogger(Hello);

// Use the enhanced component in the app
const App = () => {
  return <HelloWithLogger name="Alice" />;
};

export default App;
