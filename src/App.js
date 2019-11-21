import React, { useState } from "react";

import Person from "./Person";
import "./styles.css";

const App = () => {
  const [appState, setAppState] = useState({
    Person: [
      { name: "Ajay", age: 21 },
      { name: "Harshada", age: 20 },
      { name: "Disha", age: 22 },
      { name: "Kunal", age: 21 },
      { name: "Iyer", age: 24 }
    ]
  });

  const handleClick = val => {
    setAppState({
      Person: [
        { name: val, age: 40 },
        { name: "Harshada", age: 30 },
        { name: "Disha", age: 32 },
        { name: "Kunal", age: 31 },
        { name: "Iyer", age: 64 }
      ]
    });
  };

  const HandleNameChange = event => {
    setAppState({
      Person: [
        { name: "Ajay", age: 40 },
        { name: "Harshada", age: 30 },
        { name: event.target.value, age: 32 },
        { name: "Kunal", age: 31 },
        { name: "Iyer", age: 64 }
      ]
    });
  };
  return (
    <div>
      <h1>Click to change age </h1>
      <button onClick={() => handleClick()}>Click</button>

      <Person name={appState.Person[0].name} age={appState.Person[0].age} />

      <Person
        click={() => handleClick("Akash")}
        name={appState.Person[4].name}
        age={appState.Person[4].age}
      />

      <Person
        change={HandleNameChange}
        name={appState.Person[2].name}
        age={appState.Person[2].age}
      />
    </div>
  );
};

export default App;
