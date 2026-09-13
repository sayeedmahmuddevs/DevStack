import { MdClose } from "react-icons/md";
import type { DataType } from "../../DataType";
import { toast } from "react-toastify";
import { BiColor } from "react-icons/bi";

type SingleType = DataType & {
  isAdd: boolean;
};
interface StockCardProps {
  stock: SingleType[];
  handleRemove: (id: string) => void;
  handleRemoveAll: () => void;
}

function StockCard({ stock, handleRemove, handleRemoveAll }: StockCardProps) {
  
  // remove from stock 
  const handleRemoveBtn = (id:string) =>{
    handleRemove(id)
    toast.success('remove from Stock')
  }

  // Remove all from stock
  const handleRemoveAllBtn = () =>{
      handleRemoveAll()
      toast.success("Clear stock")
  }
  return (
    <div className="sticky top-20 outline-1 outline-gray-300 rounded-xl p-2">
      
      <h2 className="text-2xl font-semibold">Your Stock</h2>
      <span className="text-gray-400 mt-1 block">
       {stock.length >0? stock.length : "No"}  Technology Selected
      </span>
      <div className="mt-5 px-1 flex flex-col gap-2 max-h-70 overflow-y-scroll scrollbar-none">
        
        {/* stockCard */}

        {stock.length === 0 ? (
          <div className="h-20 rounded-2xl border-gray-300 w-full flex justify-center items-center border-2 border-dashed ">
            <p>Your Stock is empty</p>
          </div>
        ) : (
          stock.map((card) => (
            <div className="flex justify-between items-center outline-1 outline-gray-300 rounded-xl px-1  my-1">
              <div className="flex gap-10  items-center">
                <div>
                  <img className="w-8" src={card.icon} alt={card.name} />
                </div>
                <div>
                  <h4 className="font-semibold">{card.name}</h4>
                  <p className="text-sm">{card.category}</p>
                </div>
              </div>
            {/* remove btn */}
              <button
                className="cursor-pointer "
                onClick={()=>handleRemoveBtn(card.id) }
              >
                <MdClose />
              </button>
            </div>
          ))
        )}
      </div>
      {/* remove All btn */}
      {stock.length >= 1 && (
        <button
          onClick={() => handleRemoveAllBtn()}
          className="w-full outline-1 py-1  rounded-2xl text-red-500 hover:bg-red-400 hover:text-white cursor-pointer font-semibold mt-10"
        >
          Remove All
        </button>
      )}
    </div>
  );
}

export default StockCard;
