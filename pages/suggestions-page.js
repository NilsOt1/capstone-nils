import SuggestedColor from "@/components/SuggestedColor";

export default function SuggestionPage({ color }) {
  return (
    <>
      <SuggestedColor color={color.color1}>Color Suggestion 1</SuggestedColor>
      <SuggestedColor color={color.color2}>Color Suggestion 2</SuggestedColor>
    </>
  );
}
