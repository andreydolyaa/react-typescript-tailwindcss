import { getEmployees } from "../../features/employees/employeesSlice";
import { useEffect } from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import Filter from "../../components/Filter";
import Table from "./Table";

const Dashboard = () => {
  const dispatch = useAppDispatch();
  const { loading, error, employees } = useAppSelector((state) => state.employees);
  useEffect(() => {
    dispatch(getEmployees());
  }, []);

  return (
    <>
      {loading && <Loading />}
      {error && <Error error={error} />}
      {!!employees.length && (
        <div className="h-full bg-gray-50 text-black border flex items-center justify-center">
          <div className="employees-view-container h-full w-full p-5 border border-red-500">
            <Filter />
            <Table employees={employees}/>
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;
