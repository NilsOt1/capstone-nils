import { useRouter } from "next/router";
import { MainPage } from "../../pages/main-page/main-page";

export default function ButtonNextPage({ id, text }) {
  const router = useRouter();
  const handleClick = () => {
    router.push("/main-page/main-page");
  };
  return (
    <>
      <button type="button" id={id} onClick={handleClick}>
        {text}
      </button>
    </>
  );
}
