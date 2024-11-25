import { useState } from "react";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      {open ? (
        <div data-testid="alert" id="alert">
          <h2>Are You Sure?</h2>
          <p>These Changes Can't be reverted!</p>
          <button onClick={() => setOpen(false)}>Proced</button>
        </div>
      ) : null}
      <button disabled={open} onClick={() => setOpen(true)}>
        Delete
      </button>
    </div>
  );
}

export default App;
