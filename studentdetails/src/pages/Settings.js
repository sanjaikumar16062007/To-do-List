import { useState } from "react";

export default function Settings() {
  const [dark, setDark] = useState(true);

  return (
    <div className="center">
      <h2>Settings</h2>

      <button
        className="btn"
        onClick={() => {
          document.body.style.background = dark ? "#fff" : "#0f172a";
          document.body.style.color = dark ? "#000" : "#fff";
          setDark(!dark);
        }}
      >
        Toggle Theme
      </button>
    </div>
  );
}