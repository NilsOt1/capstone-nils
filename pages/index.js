import MainColor from "@/components/MainColor";
import { useState } from "react";
import Link from "next/link";

export default function HomePage({ color, handleColorChange }) {
  return (
    <>
      <MainColor color={color} handleColorChange={handleColorChange} />
      <Link href="/suggestions-page">
        <button type="button">Color Me!</button>
      </Link>
    </>
  );
}
