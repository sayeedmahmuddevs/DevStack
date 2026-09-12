import { MdClose } from "react-icons/md";


function StockCard() {
  return (
    <div className="sticky top-20 outline-1 outline-gray-300 rounded-xl p-2">
      <h2 className="text-2xl font-semibold">Your Stock</h2>
      <span className="text-gray-400 mt-1 block">2 Technology Selected</span>
      <div className="mt-5 flex flex-col gap-2 h-50">
        <div className="flex justify-between items-center outline-1 outline-gray-300 rounded-xl px-1">
          <div>photo</div>
          <div>
            <h4>Svelte</h4>
            <p>Frontend</p>
          </div>
          <button><MdClose/></button>
        </div>
        
      </div>
      <button className="w-full outline-1 py-1 rounded-2xl text-red-500 hover:bg-red-400 hover:text-white cursor-pointer font-semibold">Remove All</button>

    </div>
  )
}

export default StockCard
