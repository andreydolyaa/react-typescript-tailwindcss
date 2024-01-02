import React from "react";
import { DeviceInterface } from "../../features/devices/devicesSlice";
import { RiWifiLine, RiWifiOffLine, RiMore2Line } from "react-icons/ri";
import { IconBaseProps } from "react-icons";

interface DeviceProps {
  device: DeviceInterface;
}

const DeviceCard: React.FC<DeviceProps> = ({ device }) => {
  const connectionIcon = () => {
    const Icon: React.ComponentType<IconBaseProps> = device.connected
      ? RiWifiLine
      : RiWifiOffLine;
    return <Icon className="w-5 h-5" />;
  };

  return (
    <div className="device-card bg-white rounded-md shadow p-5 animate-appear2 text-gray-500 flex ">
      <div className="w-10 border-r mr-5">{connectionIcon()}</div>
      <div className="w-full">
        <div className="flex items-center justify-between">
          <p className="font-[monospace] text-xl">{device.ipAddress}</p>
          <RiMore2Line className="w-5 h-5" />
        </div>
        <p>{device.deviceIdentifier}</p>
        <div>{device.userInfo.username}@{device.hostName}</div>
      </div>
    </div>
  );
};

export default DeviceCard;
