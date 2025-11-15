
import { useEffect } from "react";
import "./App.css";
function App  () {
  useEffect(() => {
    // document.title = "صفحه اصلی";
    setInterval(() => {
      console.log("سلام");
    
    },300)
}, []); 

  return (
    <>
      
    </>
  );
}
export default App;
