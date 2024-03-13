import Tab from "./Tab";
import TabContentContext from "../store/context";
import { useContext } from "react";
import { tabs } from "../consts";

const TabContainer = () => {
  const { tabContentId, setTabContentId } = useContext(TabContentContext);
  const handleOnTabClick = (tabId: number) => {
    return () => {
      if (!setTabContentId) return;

      setTabContentId(tabId);
    };
  };

  return (
    <div className="flex gap-5 flex-col">
      {tabs.map((tab) => {
        const isTabActive = tabContentId === tab.id;

        return (
          <Tab
            onClick={handleOnTabClick(tab.id)}
            title={tab.title}
            text={tab.text}
            key={tab.id}
            isActive={isTabActive}
          />
        );
      })}
    </div>
  );
};

export default TabContainer;
