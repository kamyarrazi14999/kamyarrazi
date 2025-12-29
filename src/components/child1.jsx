

export const Child1 = ({ setTheme }) => {
  const handelTheme = () => {
    setTheme(prevTheme => prevTheme === "black" ? "white" : "black");
  };
  return (
    <div>
      <h1>فرزند اول</h1>
      <button onClick={handelTheme}>تغییر رنگ</button>
    </div>
  );
};
