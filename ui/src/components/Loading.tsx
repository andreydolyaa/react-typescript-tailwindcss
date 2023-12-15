import { RiLoader4Line } from "react-icons/ri";

const Loading = () => {
  return (
    <div className="h-full flex items-center justify-center">
      <div className="animate-spin">
        <RiLoader4Line className="h-7 w-7 text-gray-400" />
      </div>
    </div>
  );
};

export default Loading;
