import { useState } from "react";

function BgChanger() {
  const [color, setColor] = useState("lightblue");

  return (
    <div style={{ backgroundColor: color, padding: "20px", textAlign: "center" }}>
      <p>Background Color: {color}</p>
      <button onClick={() => setColor("lightgreen")}>Green</button>
      <button onClick={() => setColor("lightcoral")}>Red</button>
      <button onClick={() => setColor("lightblue")}>Blue</button>
    </div>
  );
}

export default BgChanger;