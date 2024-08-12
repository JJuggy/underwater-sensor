import React, { useContext } from "react";
import { TableDataContext } from "../../context/table-data-context";

function page() {
    const { tableData } = useContext(TableDataContext);
  return <div>page</div>;
}

export default page;
