import React from "react";
import { Employees } from "../../features/employees/employeesSlice";

const Body: React.FC<Employees> = ({ employees }) => {
  return (
    <tbody className="">
      {employees.map((employee, index) => {
        return (
          <tr
            key={employee.id}
            className={`${index % 2 == 0 ? "bg-gray-100" : "bg-white"}`}
          >
            <td className="table-td text-center">[]</td>
            <td>
              {employee.firstName} {employee.lastName}
            </td>
            <td>{employee.id}</td>
            <td>{employee.position}</td>
            <td>{employee.email}</td>
            <td>{employee.phone}</td>
            <td className="text-center">...</td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default Body;
