import Button from "../Button";
import InputComponent from "../Input";

const TabContentSecond = () => {
  return (
    <div className="md:w-[716px] h-[460px] pr-[23px] pt-5 pb-[86px]">
      <div className="overflow-y-scroll max-h-full max-w-full overflow-x-hidden">
        <div className="px-[21px] ">
          <h1 className="text-[22px] md:text-[32px] font-medium pb-[17px]">
            Контент таба 2
          </h1>
          <div className="flex flex-col gap-[27px]">
            <InputComponent title={"Имя*"} />
            <InputComponent title={"Имя*"} />
            <InputComponent title={"Имя*"} />
          </div>
        </div>
        <Button className="w-full md:w-[calc(100%-42px)]  bottom-5 md:ml-[21px] absolute" />
      </div>
    </div>
  );
};

export default TabContentSecond;
