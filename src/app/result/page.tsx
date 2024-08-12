import React, { useContext } from "react";
import { TableDataContext } from "../../context/table-data-context";
import Image from "next/image";

function page() {
  const image = require("../../../public/images/Group1.PNG");
  return (
    <>
      <div className="flex w-full items-center justify-center">
        <h1 className="text-6xl my-4  ">UWSN DATA TRANSFER RESULTS</h1>
      </div>
      <div className="flex items-center  ">
        <h2 className="font-semibold">Real AUV</h2>
        <p className="ml-2"> X:-190 Y:163.3 Z:191.1</p>
      </div>
      <div className="flex items-center w-full">
        <h2 className="font-semibold">Localized AUV</h2>
        <p className="ml-2"> X:189.1 Y:167.5 Z:191.5</p>
      </div>
      <div className="flex items-end">
        <h1 className="text-purple-700 ml-auto font-semibold">
          Time:15 Minutes Intervals
        </h1>
      </div>
      <div className="flex items-center justify-center pt-12">
        <Image alt="non" src={image} width={1200} height={700} />
      </div>
    </>
  );
}

export default page;
