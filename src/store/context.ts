import { createContext } from "react"
import { TabContentContextType } from "../types";

const TabContentContext = createContext<TabContentContextType>({tabContentId: null, setTabContentId: null})

export default TabContentContext;
