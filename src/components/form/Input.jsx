export const Input = ({ type, label_text }) => {
  return (
    <label>
      <span>{label_text}</span>
      <input type={type} />
      

    </label>
  );
};
