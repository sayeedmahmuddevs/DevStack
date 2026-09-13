import type { DataType } from "../../DataType";
import { FaStar } from "react-icons/fa6";
import { MdOutlineDone } from "react-icons/md";
import { toast } from "react-toastify";

type SingleType = DataType & {
  isAdd: boolean;
};
interface SingleCardType {
  data: SingleType;
  handleAdded: (value: string) => void;
  handleStock: (card: SingleType) => void;
}

function SingleTechCard({ data, handleAdded, handleStock }: SingleCardType) {
  
  // badge color object
  const technologyColors: { [key: string]: string } = {
    react: "bg-cyan-100 text-cyan-700",
    vue: "bg-green-100 text-green-700",
    angular: "bg-red-100 text-red-700",
    nextjs: "bg-gray-100 text-gray-800",
    nodejs: "bg-lime-100 text-lime-700",
    express: "bg-gray-100 text-gray-700",
    python: "bg-yellow-100 text-yellow-700",
    mongodb: "bg-green-100 text-green-800",
    mysql: "bg-blue-100 text-blue-700",
    postgresql: "bg-indigo-100 text-indigo-700",
    docker: "bg-sky-100 text-sky-700",
    git: "bg-orange-100 text-orange-700",
  };
  
  // added to stock 
  const handleControl = () => {
    handleAdded(data.id);
    handleStock(data);
    toast.success("Added to stock");
  };

  return (
    <div
      className={`hover:-translate-y-1 p-3 transition-transform duration-200 outline ${data.isAdd ? "outline-pink-400 shadow-xl" : "outline-gray-200"} rounded-2xl flex flex-col justify-between`}
    >
      <div className="flex justify-between items-start ">
        <div>
          <img src={data.icon} alt="" className="mb-5 w-15" />
          <p className="font-bold text-xl">{data.name}</p>
        </div>
        <span
          className={`text-md px-2 text-center rounded-2xl   ${technologyColors[data.id]}`}
        >
          {data.badge}
        </span>
      </div>

      <p className="mt-6 text-gray-500">{data.description}</p>
      <div>
        <div className="flex justify-between items-center mt-10">
          <span className="bg-blue-50 px-1 rounded-e-2xl">{data.category}</span>
          <span>{data.difficulty}</span>
          <span className="flex justify-center items-center">
            <span className="text-amber-400">
              <FaStar />{" "}
            </span>{" "}
            {data.rating}
          </span>
        </div>
        {/* Added stock btn */}
        <button
          onClick={handleControl}
          disabled={data.isAdd ? true : false}
          className={`bg-black text-white cursor-pointer w-full rounded-lg mt-5 p-1 font-semibold ${data.isAdd ? "bg-pink-100" : ""}`}
        >
          {data.isAdd ? (
            <div className="flex justify-center items-center text-pink-500">
              <MdOutlineDone />
              Added to Stock
            </div>
          ) : (
            "Add to Stock"
          )}
        </button>
      </div>
    </div>
  );
}

export default SingleTechCard;
