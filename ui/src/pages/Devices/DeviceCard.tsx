import React from "react";
import { DeviceInterface } from "../../features/devices/devicesSlice";

interface DeviceProps {
  device: DeviceInterface;
}

const DeviceCard: React.FC<DeviceProps> = ({ device }) => {
  return (
    <div className="device-card bg-white rounded-md shadow p-5 animate-appear2">
      <div>{device.deviceIdentifier}</div>
      <div>{device.ipAddress}</div>
      <div>{device.userInfo.username}</div>
    </div>
  );
};

export default DeviceCard;
