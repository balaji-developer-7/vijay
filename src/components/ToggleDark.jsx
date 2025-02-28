import { useState } from "react";

function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div style={{
      backgroundColor: darkMode ? "black" : "white",
      color: darkMode ? "white" : "black",
      padding: "20px",
      textAlign: "center"
    }}>
      <p>{darkMode ? "Dark Mode" : "Light Mode"}</p>
      <button onClick={() => setDarkMode(!darkMode)}>
        Toggle Mode
      </button>
    </div>
  );
}

export default DarkModeToggle;