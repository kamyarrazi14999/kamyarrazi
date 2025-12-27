import { useState } from "react";
import "./App.css";
import { Parent } from "./components/Parent";

function App() {
  const [theme, setTheme] = useState('black');
  return (
    <>
      <Parent theme={theme} setTheme={setTheme} />
    </>
  );
}

export default App;
