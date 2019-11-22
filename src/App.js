import React, { useState } from "react";

import Person from "./Person";
import "./styles.css";

const App = () => {
  const [appState, setAppState] = useState({
    Person: [
      { name: "Kunal", age: 21 },
      { name: "Harshada", age: 20 },
      { name: "Disha", age: 22 },
      { name: "Ajay", age: 21 },
      { name: "Iyer", age: 24 }
    ],
    changePerson: true,
    persons: null
  });

  const handleClick = val => {
    setAppState({
      Person: [
        { name: val, age: 40 },
        { name: "Harshada", age: 30 },
        { name: "Disha", age: 32 },
        { name: "Kunal", age: 31 },
        { name: "Iyer", age: 64 }
      ],
      changePerson: true
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
      ],
      changePerson: true
    });
  };

  function togglePerson() {
    console.log(appState.changePerson);
    appState.changePerson = !appState.changePerson;

    console.log(appState.changePerson);
  }

  return (
    <div>
      <button onClick={togglePerson} className="bt">
        Toggle
      </button>

      {setAppState.changePerson ? (
        <div>
          <center>
            <button onClick={() => handleClick()} className="bt">
              Click
            </button>
          </center>

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
      ) : null}
    </div>
  );
  //console.log(appState.changePerson);
};

export default App;
