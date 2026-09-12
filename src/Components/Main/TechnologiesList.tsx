import { use, useState } from "react";
import type { DataType } from "../../DataType";
import SingleTechCard from "./SingleTechCard";
import StockCard from "./StockCard";

type NewListType = DataType & {
  isAdd :boolean
}
interface TechnologiesType {
  data: Promise<DataType[]>;
}

function TechnologiesList({ data }: TechnologiesType) {
  const dataStack = use(data);

  const [NewDataList, setNewDataList] = useState<NewListType[]>(
    dataStack.map((tec) => ({ ...tec, isAdd: false })),
  )

  const handleAdded = (value:string) =>{
    setNewDataList((pre) =>
        pre.map(tec => 
            tec.id === value? {...tec, isAdd: true} : tec
        )
    )
  }
  console.log(NewDataList)

  return (
    <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-3">
      <div className="col-span-1 xl:col-span-3 md:col-span-2 sm:col-span-1 grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
        {NewDataList.map((tec) => (
          <SingleTechCard key={tec.id} data={tec} handleAdded ={handleAdded} />
        ))}
      </div>
      <div className="col-span-1 top-0 p-3 ">
        <StockCard/>

      </div>
    </div>
  );
}

export default TechnologiesList;
