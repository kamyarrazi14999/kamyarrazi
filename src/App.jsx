import { useEffect ,useState } from "react";
import "./App.css";
function App() {
  //  let users = [
  //    { 'id': 1, 'name': "John Doe", 'age': 30 },
  //     { 'id': 2, 'name': "Jane Smith", 'age': 25 },
  //    { 'id': 3, 'name': "Bob Johnson", 'age': 40 },
  //     { 'id': 4, 'name': "Alice Williams", 'age': 28 },

  //   ];
  const [users, setUsers] = useState([]);
  const hendeldelete = (id) => {
    setUsers((prevUsers) => prevUsers.filter(item => item.id !== id));
   
  };

  const fetchUsers = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    console.log(data);
    setUsers(data);

  };
useEffect(() => {
  fetchUsers();
}, []);
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
      
     
        {users.map((item) => (
          <div key={item.id}>
            <span >{item.id}- </span>
            <span >{item.name}-</span>
            <span >{item.age} -</span>
            <span >{item.username} -</span>
            <span >{item.address.zipcode} </span>
            <span onClick={() => hendeldelete(item.id)} style={{color:"red"}}> حذف</span>

        </div>
        ))}
        


      {/* {users.map((item ) => (
          
        <p key={item.id}> {item.name} - {item.age} - {item.id}  </p>
      ))} }

      {/* <button onClick={() => setCount(prev => prev + 1)}> افزایش عدد </button>
      <button onClick={() => settest(prev => prev + 1)}> افزایش تست </button>
      <h1>{count} عدد کانت</h1>
      <h2>{test} عدد تست</h2> */}
    </>
  );
}
export default App;
