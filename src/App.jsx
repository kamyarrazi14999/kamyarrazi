import { useState } from "react";
import "./App.css";


function App() {
  const [islogin, setislogin] = useState(false);

  const handelstate = () => {
    setislogin(prev => !prev)
  };
  
  
  
    return (
      <>
        {islogin == true && <h1 onClick={handelstate}>Welcome to the website</h1> }
        {islogin == false && <h1 onClick={handelstate}>Please login</h1> }
    
      </>
    );
   } 
  


export default App;
