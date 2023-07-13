import { StyledSuggestion } from "./styles";

export default function SuggestedColor({ children, color }) {
  return <StyledSuggestion color={color}>{children}</StyledSuggestion>;
}
