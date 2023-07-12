import SuggestedColor from "@/components/SuggestedColor";

export default function SuggestionPage({ color }) {
  return (
    <>
      <SuggestedColor text="Color Suggestion Nr. 1" color={color.color1} />
      <SuggestedColor text="Color Suggestion Nr. 2" color={color.color2} />
    </>
  );
}
