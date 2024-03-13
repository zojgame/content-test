type TabContentContextType = {
    tabContentId: number | null;
    setTabContentId: React.Dispatch<React.SetStateAction<number>> | null
}

type TabType =  {
    id: number;
    title: string;
    text: string;
} 

export type {TabContentContextType, TabType};