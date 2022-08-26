import { Sidebar, SidebarItem } from "react-responsive-sidebar";
import Header from "./header/Header";
import Content from "./content/Content";
export default function Demo() {
  return (
    <>
      <Header />
      <Sidebar
        breakPoint="768"
        content={[<SidebarItem>Sidebar</SidebarItem>]}
      ></Sidebar>
      <Content />
    </>
  );
}
