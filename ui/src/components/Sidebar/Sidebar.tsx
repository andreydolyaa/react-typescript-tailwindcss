import Logo from "../../components/Logo";
import Item from "./Item";
import {
  RiPieChart2Line as Pie,
  RiUser3Line as User,
  RiMoneyDollarCircleLine as Dollar,
  RiSettings3Line as Settings,
  RiAwardLine as Medal,
} from "react-icons/ri";
import Section from "./Section";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Logo />
      <div className="sidebar-wrapper">
        <Section text="General" />

        <Item linkName={"dashboard"} iconComponent={Pie} />
        <Item linkName={"users"} iconComponent={User} />

        <Section text="Statistics & Data" />

        <Item linkName={"sales"} iconComponent={Dollar} />
        <Item linkName={"performance"} iconComponent={Medal} />

        <Section text="Options & Settings" />

        <Item linkName={"settings"} iconComponent={Settings} />
      </div>
    </div>
  );
};

export default Sidebar;
