interface ITabProps {
  title: string;
  text: string;
  isActive: boolean;
  onClick: () => void;
}

const Tab = ({ title, text, isActive, onClick }: ITabProps) => {
  return (
    <div
      onClick={onClick}
      className={`select-none cursor-pointer ${
        isActive ? "bg-[#0078EE] text-white" : "bg-[#F2F0F0] text-[#2B3343]"
      }   pt-[26.42px] pl-[20.07px] pb-[21.63px] pr-[123px]`}
    >
      <h2 className="text-2xl">{title}</h2>
      <p>{text}</p>
    </div>
  );
};

export default Tab;
