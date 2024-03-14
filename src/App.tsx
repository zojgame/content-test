import { useState } from "react";
import TabContainer from "./components/TabContainer";
import TabContentContext from "./store/context";
import type { TabContentContextType } from "./types";
import TabContentContainer from "./components/TabContentContainer";

function App() {
  const [tabContentId, setTabContentId] = useState(1);
  const initialValue: TabContentContextType = {
    tabContentId: tabContentId,
    setTabContentId: setTabContentId,
  };

  return (
    <section className="flex justify-center pl-15 gap-[31px] md:gap-[45px] mx-auto pt-[224px] flex-wrap pb-[288px] px-5 md:px-0 ">
      <TabContentContext.Provider value={initialValue}>
        <TabContainer />
        <TabContentContainer />
      </TabContentContext.Provider>
    </section>
  );
}

export default App;
