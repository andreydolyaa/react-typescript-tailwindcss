import React from "react";
import { Devices } from "../../features/devices/devicesSlice";

const Body: React.FC<Devices> = ({ devices }) => {
  // console.log(devices);
  
  return (
    <tbody className="">
      {devices.map((device, index) => {
        return (
          <tr
            key={device._id}
            className={`${index % 2 == 0 ? "bg-gray-100" : "bg-white"}`}
          >
            <td className="table-td text-center">[]</td>
            <td>{device.deviceIdentifier}</td>
            <td>{device.userInfo.username}</td>
            <td>{device.hostName}</td>
            <td>{device.ipAddress}</td>
            <td>{device.upTime}</td>
            <td className="text-center">...</td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default Body;
