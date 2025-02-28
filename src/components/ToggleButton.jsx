import { useState } from "react";

function ToggleText() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide" : "Show"} Message
      </button>
      {isVisible && <p>This is a toggled message.</p>}
    </div>
  );
}

export default ToggleText;