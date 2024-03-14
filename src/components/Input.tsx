interface InputComponentProps {
  title: string;
}

const InputComponent = ({ title }: InputComponentProps) => {
  return (
    <label className="relative">
      <input
        type="text"
        className="px-[19px] w-[295px] h-[45px] rounded-[10px] focus:outline-none peer/name hover:border hover:border-[#0078EE] transition-all duration-150"
      />
      <p className="absolute text-[#ADB6BF] text-[14px] translate-x-[19px] translate-y-[-34.5px] peer-focus/name:translate-y-[-44.0px] peer-focus/name:text-[12px] transition-all duration-150">
        {title}
      </p>
    </label>
  );
};

export default InputComponent;
