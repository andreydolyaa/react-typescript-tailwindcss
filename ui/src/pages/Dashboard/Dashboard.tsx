import { getEmployees } from "../../features/employees/employeesSlice";
import { useEffect } from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";

const Dashboard = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.employees);
  useEffect(() => {
    dispatch(getEmployees());
  }, []);
  useEffect(() => {
    console.log(data.loading, "loading");
    console.log(data.error, "error");
    console.log(data.employees, "employees");
  }, [data]);
  return <div className="bg-gray-100"></div>;
};

export default Dashboard;
