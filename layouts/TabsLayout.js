import Tabs from "../components/Tabs/Tabs";

const TabsLayout = ({ children, themes }) => {
  return (
    <section className="tabContainer">
      <Tabs themes={themes} />
      {children}
    </section>
  );
};

export default TabsLayout;
