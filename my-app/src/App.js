import React, { useState } from "react";

function App() {
  const langDb = {
    Java: [
      { name: "Spring", version: "2.0" },
      { name: "Servlet", version: "3.0" },
    ],
    Python: [
      { name: "Django", version: "5.5" },
      { name: "Flask", version: "6.5" },
    ],
    JavaScript: [
      { name: "Angular", version: "7.3" },
      { name: "React", version: "4.4" },
    ],
  };

  const [state, setState] = useState("JavaScript");

  const clickHandler = (items) => {
    setState(items);
  };

  return (
    <div>
      <h1>Programming Languages</h1>
      {Object.keys(langDb).map(function (items) {
        return <button onClick={() => clickHandler(items)}>{items}</button>;
      })}
      <hr />
      {langDb[state].map(function (book) {
        return (
          <div>
            <h1>{book.name}</h1>
            <h1>{book.version}</h1>
          </div>
        );
      })}
    </div>
  );
}

export default App;
