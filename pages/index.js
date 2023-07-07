import ButtonNextPage from "@/components/ButtonNextPage";
import MainColor from "@/components/MainColor";

export default function HomePage() {
  return (
    <>
      <MainColor text="color1" id="color1" />
      <MainColor text="color2" id="color2" />
      <MainColor text="color3" id="color3" />
      <ButtonNextPage text="Color Me!" id="colorMe" />
    </>
  );
}
