interface ITabProps {
  title: string;
  text: string;
}

const Tab = ({ title, text }: ITabProps) => {
  return (
    <div className="bg-[#0078EE] text-white pt-[26.42px] pl-[20.07px] pb-[21.63px] pr-[123px]">
      <h2 className="text-2xl">{title}</h2>
      <p>{text}</p>
    </div>
  );
};

export default Tab;
