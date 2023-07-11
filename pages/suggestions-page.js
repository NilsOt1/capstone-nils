import SuggestedColor from "@/components/SuggestedColor";

export default function SuggestionPage({ color, handleColorchange }) {
  return (
    <>
      <SuggestedColor text="Color Suggestion Nr. 1" />
      <SuggestedColor text="Color Suggestion Nr. 2" />
      <SuggestedColor text="Color Suggestion Nr. 3" />
    </>
  );
}
