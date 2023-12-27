import Logo from "../../components/Logo";
import Item from "./Item";
import {
  RiPieChart2Line as Pie,
  RiComputerLine as Computer,
  RiAlarmWarningLine as Alarm,
  RiSettings3Line as Settings,
  RiLineChartLine as Chart,
} from "react-icons/ri";
import Section from "./Section";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Logo />
      <div className="sidebar-wrapper">
        <Section text="General" />
        <Item linkName={"dashboard"} iconComponent={Pie} />
        <Item linkName={"devices"} iconComponent={Computer} />

        <Section text="Alerts & Monitoring" />
        <Item linkName={"Alerts"} iconComponent={Alarm} />
        <Item linkName={"Monitoring"} iconComponent={Chart} />

        <Section text="Options & Settings" />
        <Item linkName={"settings"} iconComponent={Settings} />
      </div>
    </div>
  );
};

export default Sidebar;
