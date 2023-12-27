import React from "react";
import Body from "./Body";
import Header from "./Header";
import { Employees } from "../../features/employees/employeesSlice";

const Table: React.FC<Employees> = ({ employees }) => {
  return (
    <div className="employees-table">
      <table className="table-fixed w-full shadow-md">
        <Header />
        <Body employees={employees} />
      </table>
    </div>
  );
};

export default Table;
