import ArrowButton from "./ArrowButton";

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
      className={`transition-all duration-150 select-none cursor-pointer md:h-[140px] w-full md:w-[718px]  ${
        isActive ? "bg-[#0078EE] text-white" : "bg-[#F2F0F0] text-[#2B3343]"
      }   pt-[26.42px] pl-[20.07px] pb-[21.63px] pr-4 md:pr-[123px]`}
    >
      <div className="flex justify-between pb-[30px] md:pb-[25.54px]">
        <h2 className="text-xl md:text-2xl">{title}</h2>
        <ArrowButton
          className={`block md:hidden ${
            isActive ? "stroke-[#0078EE] bg-white" : "stroke-white bg-[#0078EE]"
          } `}
        />
      </div>
      <p className="text-[12px] md:text-[14px]">{text}</p>
    </div>
  );
};

export default Tab;
