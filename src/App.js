import React, { useRef } from "react";
import "./styles.css";

export default function App() {
  const userRef = useRef(null);

  const handleClick = () => {
    userRef.current.focus();
    // userRef.current.value = "";
  };

  return (
    <div className="App">
      <h1>Hello</h1>
      <input type="text" placeholder="Type Something..." ref={userRef} />
      <button onClick={handleClick}>Change Name</button>
    </div>
  );
}
