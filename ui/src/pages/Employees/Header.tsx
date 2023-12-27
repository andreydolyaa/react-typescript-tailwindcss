

const Header = () => {
  return (
    <thead className="h-16 bg-white rounded-md">
      <tr>
        <th className="w-16 text-center">[]</th>
        <th className="table-th">Name</th>
        <th className="table-th">ID</th>
        <th className="table-th">Position</th>
        <th className="table-th">Email</th>
        <th className="table-th">Phone Number</th>
        <th className="w-16 text-center">...</th>
      </tr>
    </thead>
  );
};

export default Header;
