
import { useEffect , useState } from "react";
import "./App.css";
function App() {
  // const handelResize =() => { 

  //   console.log("ریسایز شد");
  // }
  // const [count, setCount] = useState(0)
  // const [test, settest] = useState(0)
  // console.log("کامپوننت رندر شد");
  // useEffect(() => {
  //   document.title = `عنوان  ${test}  `
    
  // }, [ test ]); 
  // useEffect(() => {
  //   // document.title = `عنوان  ${count}  `
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //   .then((response) => response.json())
  //   .then((data) => console.log(data));
  // }, [ count ]); 
  // setInterval(() => {
  //   console.log("سلام")
    
  // },300)
  // window.addEventListener('resize' ,handelResize)
  // fetch("https://jsonplaceholder.typicode.com/posts")
  // .then((response) => response.json())
  // .then((data) => console.log(data));
  useEffect(() => {
     let hendelTimeout = setTimeout(() => {
     return () => clearTimeout(hendelTimeout);
    }, 300);

  }, [] )
  useEffect(() => {
     let hendelInterval = setTimeout(() => {
     return () => clearTimeout(hendelInterval);
    }, 300);

  }, [] )

  return (
    <>
      {/* <button onClick={() => setCount(prev => prev + 1)}> افزایش عدد </button>
      <button onClick={() => settest(prev => prev + 1)}> افزایش تست </button>
      <h1>{count} عدد کانت</h1>
      <h2>{test} عدد تست</h2> */}
    </>
  );
}
export default App;
