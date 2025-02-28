import { useState } from "react";

function UserInfo() {
  const [name, setName] = useState("John");
  const [age, setAge] = useState(25);

  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <button onClick={() => setAge(age + 1)}>Increase Age</button>
      <button onClick={() => setName(name === "John" ? "Doe" : "John")}>
        Change Name
      </button>
    </div>
  );
}

export default UserInfo;