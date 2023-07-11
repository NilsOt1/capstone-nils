import MainColor from "@/components/MainColor";
import { useState } from "react";
import Link from "next/link";

export default function HomePage() {
  const [color, setColor] = useState({
    color1: "",
    color2: "",
    color3: "",
  });
  const handleColorChange = (id, value) => {
    setColor((prevColor) => ({
      ...prevColor,
      [id]: value,
    }));
  };

  console.log(color);

  return (
    <>
      <MainColor color={color} handleColorChange={handleColorChange} />
      <Link href="/suggestions-page">
        <button type="button">Color Me!</button>
      </Link>
    </>
  );
}
