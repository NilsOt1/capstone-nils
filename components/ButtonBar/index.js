import { useRouter } from "next/router";

import styled from "styled-components";
import { useState } from "react";
import { StyledButton } from "@/components/MainButton";
import Icon from "@mdi/react";
import { mdiArrowLeft } from "@mdi/js";

const InfoText = styled.div`
  position: absolute;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px;
  background-color: #f0f0f0;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: ${(props) => (props.show ? "block" : "none")};

  &::before {
    content: "x";
    position: absolute;
    top: 5px;
    right: 5px;
    font-size: 16px;
    font-weight: 400;
  }
`;

const InfoButton = styled(StyledButton)`
  border-radius: 30px;
  height: 60px;
  width: 60px;
  font-size: 1.5em;
  font-weight: 300;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

const StyledButtonContainer = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 5px 20px 0 0;
`;

const CustomBackButton = styled(StyledButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px 10px;
  border-radius: 30px;
  height: 60px;
  width: 60px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const StyledRandomButton = styled(StyledButton)`
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-decoration: underline;
  text-decoration-thickness: 0.5px;
  height: 45px;
  width: 130px;
  font-size: 1.4em;
`;

export default function ButtonBar({ handleRandomClick }) {
  const [showInfo, setShowInfo] = useState(false);

  const handleToggleInfo = () => {
    setShowInfo(true);

    setTimeout(() => {
      setShowInfo(false);
    }, 12000);
  };

  const handleCloseInfo = () => {
    setShowInfo(false);
  };

  const router = useRouter();

  function handleGoBack() {
    router.back();
  }

  return (
    <>
      {showInfo && (
        <InfoText show={showInfo.toString()} onClick={handleCloseInfo}>
          How to ColorUP? - It`s a piece of cake. You simply choose three colors
          that are very prominent in your room and then press the button.
        </InfoText>
      )}
      <StyledButtonContainer>
        <CustomBackButton type="button" onClick={handleGoBack}>
          <Icon path={mdiArrowLeft} size={1.1} />
        </CustomBackButton>
        <StyledRandomButton onClick={handleRandomClick}>
          Inspiration
        </StyledRandomButton>
        <InfoButton onClick={handleToggleInfo}>i</InfoButton>
      </StyledButtonContainer>
    </>
  );
}
