import { use } from "react";
import type { DataType } from "../../DataType";
import SingleTechCard from "./SingleTechCard";

interface TechnologiesTyepe {
  data: Promise<DataType[]>;
}

function TechnologiesList({ data }: TechnologiesTyepe) {
  const dataStack = use(data);

  return (
    <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 ">
      <div className="xl:col-span-3 md:col-span-2 sm:col-span-1 grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3   gap-5">
        {dataStack.map((tec) => (
          <SingleTechCard data={tec} />
        ))}
      </div>
      <div className="col-span-1"></div>
    </div>
  );
}

export default TechnologiesList;
