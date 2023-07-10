import MainColor from "@/components/MainColor";
import { useState } from "react";
import Link from "next/link";

export default function HomePage() {
  const [color1, setColor1] = useState("");
  const [color2, setColor2] = useState("");
  const [color3, setColor3] = useState("");

  const handleColor1Change = (event) => {
    const newColor = event.target.value;
    setColor1(newColor);
  };
  const handleColor2Change = (event) => {
    const newColor = event.target.value;
    setColor2(newColor);
  };
  const handleColor3Change = (event) => {
    const newColor = event.target.value;
    setColor3(newColor);
  };
  return (
    <>
      <MainColor
        text="color1"
        id="color1"
        handleColorChange={handleColor1Change}
      />
      <MainColor
        text="color2"
        id="color2"
        handleColorChange={handleColor2Change}
      />
      <MainColor
        text="color3"
        id="color3"
        handleColorChange={handleColor3Change}
      />{" "}
      <Link href="/suggestions-page">
        <button type="button">Color Me!</button>
      </Link>
    </>
  );
}
