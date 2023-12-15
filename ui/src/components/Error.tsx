import { FiAlertTriangle } from "react-icons/fi";

interface ErrorProps {
  error: string;
}

const Error: React.FC<ErrorProps> = ({ error }) => {
  return (
    <div className="h-full flex items-center justify-center flex-col text-gray-400">
      <FiAlertTriangle className="h-7 w-7 text-orange-500" />
      <p className="max-w-xs text-center mt-3 text-[12px]">{error}</p>
    </div>
  );
};

export default Error;
