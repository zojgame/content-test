import { useContext } from "react";
import TabContentFirst from "./TabContent/TabContentFirst";
import TabContentContext from "../store/context";
import TabContentSecond from "./TabContent/TabContentSecond";
import TabContentThird from "./TabContent/TabContentThird";

const tabContents = [
  <TabContentFirst />,
  <TabContentSecond />,
  <TabContentThird />,
];

const TabContentContainer = () => {
  const tabIndex = useContext(TabContentContext);
  return (
    <div className="bg-[rgb(242,240,240)] text-[#2B3343] w-full md:w-[716px] md:h-[460px] relative ">
      {tabIndex.tabContentId && tabContents[tabIndex.tabContentId - 1]}
    </div>
  );
};

export default TabContentContainer;
