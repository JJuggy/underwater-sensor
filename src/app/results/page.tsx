import React, { useContext } from "react";
import { TableOne } from "../components/table-one";
import { TableTwo } from "../components/table-two";
import { TableThree } from "../components/table-three";
import { TableFour } from "../components/table-four";
import { TableFive } from "../components/table-five";
import { TableDataContext } from "../../context/table-data-context";

function page() {
  const { tableData } = useContext(TableDataContext);
  return (
    <div>
      <TableOne />
      <TableTwo />
      <TableThree />
      <TableFour />
      <TableFive />
    </div>
  );
}

export default page;
