import { useRouter } from "next/router";

export default function BackButton() {
  const router = useRouter();
  function handleGoBack() {
    router.back();
  }

  return <button onClick={handleGoBack}>⬅️</button>;
}
