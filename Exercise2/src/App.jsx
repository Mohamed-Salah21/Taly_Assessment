import { useState } from "react";

function App() {
  const [price, setPrice] = useState(100);
  return (
    <div>
      <p data-testid="price">${price}</p>
      <button onClick={() => setPrice(75)}>Apply Discount</button>
    </div>
  );
}

export default App;
