export const Button = ({ title }: { title: string }) => {
  return (
    <button
      type={"button"}
      className={
        "interactable hover:bg-[#202222] hover:text-[#f9f9f9] p-2 rounded-xl"
      }
    >
      {title}
    </button>
  );
};
