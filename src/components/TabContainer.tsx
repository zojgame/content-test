import Tab from "./Tab";

interface ITab {
  id: number;
  title: string;
  text: string;
}

const tabs: ITab[] = [
  {
    id: 1,
    title: "Заголовок таба 1",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In corporis deleniti saepe sequi iure est, itaque facilis doloremque consequuntur aspernatur?",
  },
  {
    id: 2,
    title: "Заголовок таба 2",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa possimus recusandae modi vel saepe illum rerum. Beatae obcaecati blanditiis enim.",
  },
  {
    id: 3,
    title: "Заголовок таба 3",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit, officiis quam perspiciatis atque natus iure?",
  },
];

const TabContainer = () => {
  return (
    <div className="flex gap-5 flex-col">
      {tabs.map((tab) => (
        <Tab title={tab.title} text={tab.text} key={tab.id} />
      ))}
    </div>
  );
};

export default TabContainer;
