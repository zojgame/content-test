import ArrowIcon from "../icons/ArrowIcon";

interface IArrowButtonProps {
  className?: string;
}

const ArrowButton = ({ className }: IArrowButtonProps) => {
  return (
    <button
      className={`p-1 rounded-[5px] ${
        className ? className : ""
      } border flex justify-center items-center `}
    >
      <ArrowIcon />
    </button>
  );
};

export default ArrowButton;
