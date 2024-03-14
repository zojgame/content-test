interface IButtonProps {
  className?: string;
}

const Button = ({ className }: IButtonProps) => {
  return (
    <button
      className={`hover:bg-[#0077eea7] bg-[#0078EE] text-white text-[14px] md:text-[18px] pt-[14px] pb-[13px] rounded-[5px] ${
        className ? className : ""
      }`}
    >
      Кнопка действия
    </button>
  );
};

export default Button;
