import React from "react";

const Beds = () => {
  const bedData = [
    { id: "B001", department: "Cardiology", status: "Available", patient: "John Doe", age: 45, condition: "Stable", lastUpdated: "2023-10-01" },
    { id: "B002", department: "Cardiology", status: "Available", patient: "John Doe", age: 45, condition: "Stable", lastUpdated: "2023-10-01" },
    { id: "B003", department: "Cardiology", status: "Not Available", patient: "John Doe", age: 45, condition: "Stable", lastUpdated: "2023-10-01" },
    { id: "B004", department: "Cardiology", status: "Available", patient: "John Doe", age: 45, condition: "Stable", lastUpdated: "2023-10-01" },
    { id: "B005", department: "Cardiology", status: "Available", patient: "John Doe", age: 45, condition: "Stable", lastUpdated: "2023-10-01" },
  ];

  return (
    <div className="bg-white h-screen">
      <div className="p-4 space-x-5">
        <button className="bg-blue-500 text-white rounded-lg px-5">Search</button>
        <button className="bg-blue-100 text-blue-700 rounded-lg px-5">Export CSV</button>
        <button className="bg-blue-100 text-blue-700 rounded-lg px-5">Export PDF</button>
        <button className="bg-blue-500 text-white rounded-lg px-5">Edit BED Details</button>
      </div>

      <div className="flex space-x-10">
        <div className="p-4">
          <p className="text-gray-500 font-medium">Occupied Beds</p>
          <p className="font-bold text-4xl">120</p>
          <p className="text-red-900">v 75%</p>
        </div>
        <div className="p-4">
          <p className="text-gray-500 font-medium">Available Beds</p>
          <p className="font-bold text-4xl">40</p>
          <p className="text-green-600">^ 25%</p>
        </div>
        <div className="p-4">
          <p className="text-gray-500 font-medium">Total Beds</p>
          <p className="font-bold text-4xl">160</p>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="table-auto w-full">
          <caption className="text-lg font-semibold mb-2">Bed Management Table</caption>
          <thead>
            <tr>
              <th className="px-10">Bed ID</th>
              <th className="px-10">Department</th>
              <th className="px-10">Status</th>
              <th className="px-10">Patient</th>
              <th className="px-10">Last Updated</th>
              <th className="px-10">Actions</th>
            </tr>
          </thead>
          <tbody>
            {bedData.map((bed) => (
              <tr key={bed.id}>
                <td className="px-14">{bed.id}</td>
                <td className="px-14">{bed.department}</td>
                <td className="px-14">{bed.status}</td>
                <td className="px-14">
                  <p>{bed.patient}</p>
                  <p className="text-gray-500 text-sm">
                    Age: {bed.age}, Condition: {bed.condition}
                  </p>
                </td>
                <td className="px-14">{bed.lastUpdated}</td>
                <td className="px-14">
                  <button className="bg-blue-600 text-white px-3 rounded-md">
                    Edit Bed Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Beds;
