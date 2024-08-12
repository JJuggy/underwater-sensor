export const TableTwo = () => {
  const tableData = [
    {
      status: "Decreasing rapidly",
      sensor: "ph Sensor",
      reading: "-4050 moldm-3",
      poll: "Acidic",
    },
    {
      status: "Decreasing",
      sensor: "Turbidity",
      reading: "4.05 NTU",
      poll: "Cloudy",
    },
    {
      status: "Increasing",
      sensor: "Temperature",
      reading: "305oC",
      poll: "Within Range",
    },
    {
      status: "Decreasing",
      sensor: "Dissolved Oxygen Sensor",
      reading: "300 mg/L",
      poll: "Within Range",
    },
    {
      status: "Increasing Rapidly",
      sensor: "Total Dissolved Solids (TDS)",
      reading: "260 mg/L",
      poll: "Harmful",
    },
  ];
  return (
    <div className="overflow-x-auto px-6  mt-12 flex flex-col items-center justify-center">
      <div className="flex justify-between w-full">
        <h1 className="text-black text-xl font-semibold">Site B</h1>
        <h1 className="text-purple-700 font-semibold">
          Time:15 Minutes Intervals
        </h1>
      </div>
      <table className="min-w-full bg-white border border-gray-200">
        <thead className="bg-black text-white font-semibold">
          <tr className="bg-black ">
            <th className="py-2 px-4 border-b text-center">Sensors</th>
            <th className="py-2 px-4 border-b text-center">Readings</th>
            <th className="py-2 px-4 border-b text-center">Status</th>
            <th className="py-2 px-4 border-b text-center">Pollution Status</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row) => (
            <tr className=" bg-gray-100" key={row.status}>
              <td className="py-2 px-4 border-b text-center">{row.sensor}</td>
              <td className="py-2 px-4 border-b text-center">{row.reading}</td>
              <td className="py-2 px-4 border-b text-center">{row.status}</td>
              <td className="py-2 px-4 border-b text-center ">{row.poll}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="w-full flex items-center justify-center">
        <div className="px-12 cursor-pointer my-4 self-center py-4 border text-[#7100E3] border-[#7100E3] ">
          Map Out Polluted Area
        </div>
      </div>
    </div>
  );
};
