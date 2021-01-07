import React, { useState } from "react";
import "./App.css";

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
    <div className="main__div">
      <h1 className="main__heading">Programming Languages</h1>
      {Object.keys(langDb).map(function (items) {
        return (
          <button
            className="button instagram"
            onClick={() => clickHandler(items)}
          >
            {items}
          </button>
        );
      })}
      <hr />
      {langDb[state].map(function (book) {
        return (
          <ul>
            <li>
              {book.name}
              <br />
              {book.version}
            </li>
          </ul>
        );
      })}
    </div>
  );
}

export default App;
