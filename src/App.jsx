
import { useState } from "react";
import "./App.css";

const App = () => {
 const [Test] = useState(false);

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((jsonn) => console.log(json));


  return (
    <>
      
    </>
  );
}
export default App;
