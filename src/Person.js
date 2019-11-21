import React from "react";

const person = props => {
  return (
    <div>
      {" "}
      <p onClick={props.click}>
        Hi, I'm {props.name} and I am {props.age} years old
      </p>
      <input type="text" onChange={props.change} value={props.name} />
    </div>
  );
};

export default person;
