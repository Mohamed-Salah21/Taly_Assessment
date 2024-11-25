import "./App.css";
import { useRef } from "react";
export const user = { name: "" };

function App() {
  const inputRef = useRef();
  function handleCreateUser(name) {
    user.name = name;
  }

  return (
    <div id="app">
      <h1>User Login</h1>
      <p>
        <label>Name</label>
        <input type="text" ref={inputRef} />
      </p>
      <p id="actions">
        <button onClick={() => handleCreateUser(inputRef.current.value)}>
          Create User
        </button>
      </p>
    </div>
  );
}

export default App;
