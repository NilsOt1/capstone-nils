import { useRouter } from "next/router";
import { styled } from "styled-components";

export default function ButtonNextPage({ id, text }) {
  const router = useRouter();
  const handleClick = () => {
    router.push("/suggestions-page");
  };
  return (
    <>
      <StyledButton>
        <button type="button" id={id} onClick={handleClick}>
          {text}
        </button>
      </StyledButton>
    </>
  );
}

const StyledButton = styled.button`
  display: flex;
  margin: 2rem;
`;
