import MainColor from "@/components/MainColor";
import ButtonNextPage from "@/components/ButtonNextPage";
import Link from "next/link";
import { StyledButtonNextPage } from "@/components/ButtonNextPage/styles";

export default function HomePage({ color, handleColorChange }) {
  return (
    <>
      <MainColor color={color} handleColorChange={handleColorChange} />
      <Link href="/suggestions-page">
        <ButtonNextPage text="Color Me!" />
      </Link>
    </>
  );
}
