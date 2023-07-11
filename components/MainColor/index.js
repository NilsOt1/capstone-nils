import { Fragment } from "react";

export default function MainColor({ color, handleColorChange }) {
  const colors = [
    { id: "color1", text: "color1", name: "color1" },
    { id: "color2", text: "color2", name: "color2" },
    { id: "color3", text: "color3", name: "color3" },
  ];

  const handleChange = (event) => {
    const { id, value } = event.target;
    handleColorChange(id, value);
  };

  return (
    <Fragment>
      {colors.map(({ id, text, name }) => (
        <Fragment key={id}>
          <label htmlFor={id}>{text}</label>
          <input
            type="color"
            id={id}
            name={name}
            value={color[id]}
            onChange={handleChange}
          />
        </Fragment>
      ))}
    </Fragment>
  );
}
