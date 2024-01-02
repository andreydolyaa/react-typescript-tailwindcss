import { getEmployees } from "../../features/employees/employeesSlice";
import { useEffect } from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import Filter from "../../components/Filter";
import Table from "./Table";
import { getDevices } from "../../features/devices/devicesSlice";
import DeviceCard from "./DeviceCard";

const Dashboard = () => {
  const dispatch = useAppDispatch();
  const { loading, error, devices } = useAppSelector((state) => state.devices);
  useEffect(() => {
    dispatch(getDevices());
  }, []);

  return (
    <>
      {loading && <Loading />}
      {error && <Error error={error} />}
      {!!devices.length && (
        <div className="h-full bg-gray-50 text-black border flex items-center justify-center">
          <div className="devices-view-container h-full w-full px-[30px] min-[1441px]:px-0">
            <Filter />
            {/* <Table devices={devices}/> */}

            <div className="devices-cards">
              {devices.map((device) => {
                return <DeviceCard key={device._id} device={device} />;
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;
