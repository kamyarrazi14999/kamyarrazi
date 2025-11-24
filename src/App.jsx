
// import { useEffect , useState } from "react";
import "./App.css";
function App() {
 let users = [
   { id: 1, name: "John Doe", age: 30 },
    { id: 2, name: "Jane Smith", age: 25 },
   { id: 3, name: "Bob Johnson", age: 40 },
    { id: 4, name: "Alice Williams", age: 28 },

  ];
  
  
  
  
  
  
  
  
  
  
  // let hendelResize =() => {
  //  ;
  // }
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
  // useEffect(() => {
  //    let hendelTimeout = setTimeout(() => {
  //    return () => clearTimeout(hendelTimeout);
  //   }, 300);

  // }, [] )
  // useEffect(() => {
  //   window.addEventListener('resize', hendelResize);
  //   return () => 
  //     window.removeEventListener('resize', hendelResize);
   
  

  //   }, [] );

  return (
    <>
      {users.map((item,index) => (
          
      <p key= {index}>{item}- {index}</p>
      ))}




      {/* <button onClick={() => setCount(prev => prev + 1)}> افزایش عدد </button>
      <button onClick={() => settest(prev => prev + 1)}> افزایش تست </button>
      <h1>{count} عدد کانت</h1>
      <h2>{test} عدد تست</h2> */}
    </>
  );
}
export default App;
