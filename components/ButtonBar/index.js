import { useRouter } from "next/router";
import { useState } from "react";
import Icon from "@mdi/react";
import { mdiArrowLeft } from "@mdi/js";
import {
  StyledInfoText,
  StyledInfoButton,
  StyledButtonContainer,
  StyledBackButton,
  StyledInspirationButton,
} from "./styles";

export default function ButtonBar({ handleInspirationClick }) {
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

  StyledInfoText.defaultProps = {
    $show: false,
  };

  const router = useRouter();

  function handleGoBack() {
    router.back();
  }

  return (
    <>
      {showInfo && (
        <StyledInfoText show={showInfo.toString()} onClick={handleCloseInfo}>
          How to ColorUP? - It`s a piece of cake. You simply choose three colors
          that are very prominent in your room and then press the button.
        </StyledInfoText>
      )}
      <StyledButtonContainer>
        <StyledBackButton type="button" onClick={handleGoBack}>
          <Icon path={mdiArrowLeft} size={1.1} />
        </StyledBackButton>
        <StyledInspirationButton onClick={handleInspirationClick}>
          Inspiration
        </StyledInspirationButton>
        <StyledInfoButton onClick={handleToggleInfo}>i</StyledInfoButton>
      </StyledButtonContainer>
    </>
  );
}
