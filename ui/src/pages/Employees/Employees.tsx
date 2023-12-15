import { getEmployees } from "../../features/employees/employeesSlice";
import { useEffect } from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import Loading from "../../components/Loading";
import Error from "../../components/Error";

const Dashboard = () => {
  const dispatch = useAppDispatch();
  const { loading, error, employees } = useAppSelector((state) => state.employees);
  useEffect(() => {
    dispatch(getEmployees());
  }, []);

  return (
    <div className="h-full bg-gray-50 text-black">
      {loading && <Loading />}
      {error && <Error error={error} />}
    </div>
  );
};

export default Dashboard;
