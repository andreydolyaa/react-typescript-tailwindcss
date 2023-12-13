import { Employee, getEmployees } from "../../features/employees/employeesSlice";
import { useEffect } from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useLoaderData } from "react-router-dom";

const Dashboard = () => {
  const dispatch = useAppDispatch();
  // const employees = useLoaderData()
  const data: Employee = useAppSelector((state) => state.employees);

  useEffect(() => {
    // dispatch(getEmployees());
    // console.log(employees);
    console.log(data);
    
  }, []);

  // useEffect(() => {
  // }, [data]);

  return <div className="bg-gray-100"></div>;
};

export default Dashboard;
