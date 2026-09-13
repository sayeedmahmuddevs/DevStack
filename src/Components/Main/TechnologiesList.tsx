import { use, useState } from "react";
import type { DataType } from "../../DataType";
import SingleTechCard from "./SingleTechCard";
import StockCard from "./StockCard";

type NewListType = DataType & {
  isAdd: boolean;
};
interface TechnologiesType {
  data: Promise<DataType[]>;
}

function TechnologiesList({ data }: TechnologiesType) {
  const dataStack = use(data);
  
// Add isAdd property to each technology item
  const [NewDataList, setNewDataList] = useState<NewListType[]>(
    dataStack.map((tec) => ({ ...tec, isAdd: false })),
  );
  //   Added to stock
  const handleAdded = (value: string) => {
    setNewDataList((pre) =>
      pre.map((tec) => (tec.id === value ? { ...tec, isAdd: true } : tec)),
    );
  };

  //   stockCart stack
  const [stock, setStock] = useState<NewListType[]>([]);

  const handleStock = (card: NewListType) => {
    setStock((pre) =>
      pre.some((item) => item.id === card.id) ? pre : [...pre, card],
    );
  };

  // remove card update from stock
  const handleRemove = (id: string) => {
    setStock((pre) => pre.filter((pr) => pr.id !== id));
    setNewDataList((pre) =>
      pre.map((tec) => (tec.id === id ? { ...tec, isAdd: false } : tec)),
    );
  };

  // RemoveAll from stock
  const handleRemoveAll = () => {
    setNewDataList((pre) => pre.map((tec) => ({ ...tec, isAdd: false })));
    setStock((pre) => pre.filter((pr) => !pr.id));
  };

  return (
    <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-3">
      <div className="col-span-1 xl:col-span-3 md:col-span-2 sm:col-span-1 grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
        {NewDataList.map((tec) => (
          <SingleTechCard
            key={tec.id}
            data={tec}
            handleAdded={handleAdded}
            handleStock={handleStock}
          />
        ))}
      </div>
      <div className="col-span-1 top-0 p-3 ">
        <StockCard
          stock={stock}
          handleRemove={handleRemove}
          handleRemoveAll={handleRemoveAll}
        />
      </div>
    </div>
  );
}

export default TechnologiesList;
