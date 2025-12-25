
import { useState } from "react";
import "./App.css";
import { DisplayNumbur } from "./components/DisplayNumbur";
import { Input } from "./components/input";

function App() {
const [number, setNumber] = useState(0);
  return (
    <>
      <Input />
      <DisplayNumbur />
    </>
  );
}
export default App;
