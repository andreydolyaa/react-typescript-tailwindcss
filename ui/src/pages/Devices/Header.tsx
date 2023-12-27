

const Header = () => {
  return (
    <thead className="h-16 bg-white rounded-md">
      <tr>
        <th className="w-16 text-center">[]</th>
        <th className="table-th">Identifier</th>
        <th className="table-th">User Name</th>
        <th className="table-th">Host Name</th>
        <th className="table-th">IP</th>
        <th className="table-th">Up Time</th>
        <th className="w-16 text-center">...</th>
      </tr>
    </thead>
  );
};

export default Header;
