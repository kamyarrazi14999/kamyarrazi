import { Input } from "./Input";
import "./Form.css";
import { Button } from "./Button";
export const Form = ({title , btn_text , children}) => {
  return (
    <>
      <form>
        <h2>{title}</h2>
        {children}
        <Button btn_text={btn_text} />
      </form>
    </>
  );
};
