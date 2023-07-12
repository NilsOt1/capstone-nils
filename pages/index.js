import MainColor from "@/components/MainColor";
import ButtonNextPage from "@/components/ButtonNextPage";
import Link from "next/link";
import { StyledContainer } from "@/components/ButtonNextPage/styles";

export default function HomePage({ color, handleColorChange }) {
  return (
    <StyledContainer>
      <MainColor color={color} handleColorChange={handleColorChange} />
      <Link href="/suggestions-page">
        <ButtonNextPage text="COLOR ME !" />
      </Link>
    </StyledContainer>
  );
}
