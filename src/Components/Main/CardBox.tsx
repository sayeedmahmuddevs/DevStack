import { Suspense, useState } from "react";
import type { DataType } from "../../DataType";
import TechnologiesList from "./TechnologiesList";

function CardBox() {
  const dataStack = async (): Promise<DataType[]> => {
    const res = await fetch("./Data.json");
    const data = await res.json();
    return data;
  };

  const [data] = useState(() => dataStack());

  return (
    <section>
      <div className="mb-15">
        <h1 className="font-bold text-4xl">
          Explore{" "}
          <span className="bg-linear-90 to-pink-600 from-pink-700 bg-clip-text text-transparent">
            The Technologies
          </span>
        </h1>
        <p className="text-md">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>
      <Suspense fallback={<p>loadingData</p>}>
        <TechnologiesList data={data} />
      </Suspense>
    </section>
  );
}

export default CardBox;
