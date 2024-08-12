import React, { useContext } from "react";
import { TableDataContext } from "../../context/table-data-context";
import Image from "next/image";

function page() {
  const image = require("../../../public/images/Group1.PNG");
  return (
    <div className="flex items-center justify-center pt-12">
      <Image alt="non" src={image} width={1200} height={700} />
    </div>
  );
}

export default page;
