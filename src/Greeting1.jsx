
import React from 'react';


const Greeting = ({ name, age }) => {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>You are {age} years old.</p>
    </div>
  );
};


Greeting.defaultProps = {
  name: 'Guest', 
  age: 18,      
};


export default Greeting1;
