export default function MainColor({ text, id }) {
  return (
    <>
      <label htmlFor={id}>{text}</label>
      <input type="color" id={id} />
    </>
  );
}
