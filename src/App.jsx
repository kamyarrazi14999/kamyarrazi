
import { useEffect } from "react";
import "./App.css";
function App  () {
  const handelResize =() => { 

    console.log("ریسایز شد");
  }
  
  
  useEffect(() => {
  
    // setInterval(() => {
    //   console.log("سل")
    
    // },300)
window.addEventListener('resize' ,handelResize)

}, []); 

  return (
    <>
      
    </>
  );
}
export default App;
