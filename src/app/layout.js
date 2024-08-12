"use client";
import React from "react";
import "./globals.css";
import {
  AuthContext,
  TableDataContext,
  TableDataProvider,
} from "../context/table-data-context";

export default function RootLayout({ children }) {
  const [tableData, setTableData] = React.useState([]);

  return (
    <html lang="en">
      <TableDataContext.Provider value={{ tableData, setTableData }}>
        <body>{children}</body>
      </TableDataContext.Provider>
    </html>
  );
}
