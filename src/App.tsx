import { useState } from "react";
import TabContainer from "./components/TabContainer";
import TabContentContext from "./store/context";
import type { TabContentContextType } from "./types";

function App() {
  const [tabContentId, setTabContentId] = useState(1);
  const initialValue: TabContentContextType = {
    tabContentId: tabContentId,
    setTabContentId: setTabContentId,
  };

  return (
    <section className="grid grid-cols-2 pl-15 pr-[61px] gap-[45px] w-[1600px] mx-auto pt-[224px]">
      <TabContentContext.Provider value={initialValue}>
        <TabContainer />
      </TabContentContext.Provider>
    </section>
  );
}

export default App;
