import { useState } from "react";
import "./index.css";
import TextUtils from "./components/TextUtils";

const App = () => {
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(false);
  if (!isDarkModeEnabled) {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  } else if (isDarkModeEnabled) {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  }

  function handleClick() {
    isDarkModeEnabled
      ? setIsDarkModeEnabled(false)
      : setIsDarkModeEnabled(true);
  }

  return (
    <>
      <header className="d-flex flex-row justify-content-end p-5">
        <button
          onClick={handleClick}
          className={`btn btn-outline-${isDarkModeEnabled ? "dark" : "light"}`}
        >
          Enable {!isDarkModeEnabled ? "light" : "dark"} Mode
        </button>
      </header>
      <TextUtils heading="TextUtils" />
    </>
  );
};

export default App;
