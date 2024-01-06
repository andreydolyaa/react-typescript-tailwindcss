import React from "react";
import { DeviceInterface } from "../../features/devices/devicesSlice";
import { RiMore2Line } from "react-icons/ri";
// import { IconBaseProps } from "react-icons";
import Online from "../../components/Online";

interface DeviceProps {
  device: DeviceInterface;
}

const DeviceCard: React.FC<DeviceProps> = ({ device }) => {
  return (
    <div className="device-card bg-cardColor rounded-md shadow p-5 animate-appear2 text-gray-200 flex">
      <div className="w-10 border-r border-gray-600 border-dashed mr-5">
        <Online connected={device.connected} />
      </div>
      <div className="w-full">
        <div className="flex items-center justify-between">
          <p className="font-[monospace] text-md">{device.ipAddress}</p>
          <RiMore2Line className="w-5 h-5" />
        </div>
        <p>{device.deviceIdentifier}</p>
        <div>
          {device.userInfo.username}@{device.hostName}
        </div>
      </div>
    </div>
  );
};

export default DeviceCard;
