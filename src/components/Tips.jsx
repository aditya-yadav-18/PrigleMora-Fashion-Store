import { FaCheckCircle } from "react-icons/fa";

export default function Tips(props) {
  return (
    <div className="fixed top-6 right-6 z-50 animate-fadeIn">
      <div className="flex items-center gap-3 bg-white shadow-lg rounded-lg px-5 py-3 border border-green-100">
        <FaCheckCircle className="text-green-500" />
        <span className="text-sm font-medium text-gray-700">
          You’re {props.msg} successfully
        </span>
      </div>
    </div>
  );
}
