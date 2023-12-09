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
      <div className="sidebar-wrapper p-5">
        <Section text="General" />

        <Item linkTo={"dashboard"} iconComponent={Pie} />
        <Item linkTo={"users"} iconComponent={User} />

        <Section text="Statistics & Data" />

        <Item linkTo={"sales"} iconComponent={Dollar} />
        <Item linkTo={"performance"} iconComponent={Medal} />

        <Section text="Options & Settings" />

        <Item linkTo={"sales"} iconComponent={Settings} />
      </div>
    </div>
  );
};

export default Sidebar;
