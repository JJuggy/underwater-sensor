import {
  Table,
  TableHeader,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "../../components/ui/table";
export const TableTwo = () => {
  return (
    <div>
     
      <Table className="mt-12  ">
        <TableHeader className="bg-black text-white ">
          <TableRow>
            <TableHead className="w-[300px]">Sensors</TableHead>
            <TableHead>Readings</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Population Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className="bg-gray-100">
            <TableCell className="font-medium">pH Sensor</TableCell>
            <TableCell>-3450moldm</TableCell>
            <TableCell>Decreasing Rapidly</TableCell>
            <TableCell className="text-right text-red-500">Acidic</TableCell>
          </TableRow>
          <TableRow className="bg-gray-300">
            <TableCell className="font-medium">Turbidity</TableCell>
            <TableCell>2.05NTU</TableCell>
            <TableCell>Increasing</TableCell>
            <TableCell className="text-right text-yellow-600">Cloudy</TableCell>
          </TableRow>
          <TableRow className="bg-gray-100">
            <TableCell className="font-medium">Temperature</TableCell>
            <TableCell>3.05oC</TableCell>
            <TableCell>Increasing</TableCell>
            <TableCell className="text-right text-green-600">
              Within Range
            </TableCell>
          </TableRow>
          <TableRow className="bg-gray-300">
            <TableCell className="font-medium">
              Disolved Oxygen Sensor
            </TableCell>
            <TableCell>350mg/L</TableCell>
            <TableCell>Increasing</TableCell>
            <TableCell className="text-right text-green-600">
              Within Range
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">
              Total Disolved Solids(TDS)
            </TableCell>
            <TableCell>160mg/L</TableCell>
            <TableCell>Increasing</TableCell>
            <TableCell className="text-right text-red-600">Harmful</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};
