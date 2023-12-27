import React from "react";
import Body from "./Body";
import Header from "./Header";
import { Devices } from "../../features/devices/devicesSlice";

const Table: React.FC<Devices> = ({ devices }) => {
  return (
    <div className="employees-table">
      <table className="table-fixed w-full shadow-md">
        <Header />
        <Body devices={devices} />
      </table>
    </div>
  );
};

export default Table;
