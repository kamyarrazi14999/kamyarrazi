import { useState } from "react";
import "./App.css";
import { Profile } from "./components/Profile";
import { LoginForm } from "./components/LoginForm";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  // const handelState = () => {
  //   setIsLogin((prev) => !prev);
  // };

  return (
    <>
    <button onClick={()=>setIsLogin(prev=> !prev)}>{isLogin ? 'خروج کاربر' : 'کلیک برای لاگین'}</button>
      {/* {isLogin == true ? <h1 onClick={handelState}>لاگین هست</h1> : <h1 onClick={handelState}>لاگین نیستت</h1>} */}
      {/* {isLogin == true && <h1 onClick={handelState}>لاگین هست</h1>} */}
      {/* {isLogin == false && <h1 onClick={handelState}>لاگین نیستتت</h1>} */}
      {isLogin ? <Profile /> : <LoginForm />}
    </>
  );
}
export default App;
