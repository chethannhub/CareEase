import React, { useState } from "react";
import DetailsCard from "./billdetails";
import CashCard from "./billcash";
import PaymentCard from "./billpayment";
import BillCard from "./billcard";

const Main = () => {
  const [active, setActive] = useState(0);
  const [tableData, setTableData] = useState([
    {
      reservationId: "#RSV001",
      patientName: "Albert Flores",
      numberOfBills: "0/2",
      reservationDate: "19/10/2024",
      totalAmount: 2311,
      paymentStatus: "PARTIALLY PAID",
    },
  ]);

  const [newRow, setNewRow] = useState({
    reservationId: "",
    patientName: "",
    numberOfBills: "",
    reservationDate: "",
    totalAmount: "",
    paymentStatus: "UNPAID",
  });

  const openCard = (cardId) => {
    setActive(cardId);
  };

  const closeCard = () => {
    setActive(0);
    setNewRow({
      reservationId: "",
      patientName: "",
      numberOfBills: "",
      reservationDate: "",
      totalAmount: "",
      paymentStatus: "UNPAID",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewRow((prev) => ({ ...prev, [name]: value }));
  };

  const addDetails = () => {
    setTableData([...tableData, { ...newRow, reservationId: `#RSV00${tableData.length + 1}` }]);
    closeCard();
  };

  return (
    <div>
      {active !== 0 && (
        <div
          className="fixed inset-0 bg-black bg-opacity-10 z-10"
          onClick={closeCard}
        ></div>
      )}

      <div className={`relative p-5 h-screen w-full ${active !== 0 ? "blur-sm pointer-events-none" : ""}`}>
        <div className="flex items-center mb-6">
          <div className="flex items-center mr-4">
            <img className="w-10 h-10" src="./icons/revenue.svg" alt="Revenue" />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Revenue This Month</p>
            <p className="flex items-center text-xl font-bold">
              <img className="w-4 h-4 mr-1" src="./icons/rupee.svg" alt="Rupee" />
              <span>123456</span>
            </p>
          </div>
        </div>

        <div className="flex border-b-2 mb-4">
          <button className="px-4 py-2 text-sm bg-blue-500 text-white rounded-md mr-2">Bills</button>
          <button className="px-4 py-2 text-sm bg-gray-200 rounded-md">Payment Received</button>
        </div>

        <div className="mb-4 flex justify-between items-center">
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 w-1/2"
          />
          <div className="flex space-x-4">
            <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-md">
              <img className="w-4 h-4 mr-2" src="./icons/export.svg" alt="Export" />
              Export
            </button>
            <button
              className="px-4 py-2 bg-gray-200 text-gray rounded-md"
              onClick={() => openCard(5)}
            >
              Add Details
            </button>
          </div>
        </div>

        <div className="w-full">
          <div className="grid grid-cols-8 gap-4 bg-gray-100 p-4 rounded-md mb-2 text-sm font-bold">
            <p>Reservation ID</p>
            <p>Patient Name</p>
            <p>Number of Bills</p>
            <p>Reservation Date</p>
            <p>Total Amount</p>
            <p>Payment</p>
            <p>Actions</p>
            <p>Expand</p>
          </div>
          {tableData.map((row, index) => (
            <div key={index} className="grid grid-cols-8 gap-4 items-center mb-2">
              <p>{row.reservationId}</p>
              <p>{row.patientName}</p>
              <p>{row.numberOfBills}</p>
              <p>{row.reservationDate}</p>
              <p className="flex items-center">
                <img className="w-4 h-4 mr-1" src="./icons/rupee.svg" alt="Rupee" />
                {row.totalAmount}
              </p>
              <div className="flex items-center space-x-2">
                <p className="text-yellow-500">{row.paymentStatus}</p>
                <button
                  onClick={() => openCard(1)}
                  className="px-2 py-1 text-xs bg-blue-500 text-white rounded-md"
                >
                  Set Payment
                </button>
              </div>
              <button>
                <img className="w-4 h-4" src="./icons/more.svg" alt="More" />
              </button>
              <button>
                <img className="w-4 h-4" src="./icons/down_arrow.svg" alt="Expand" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {active !== 0 && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-md shadow-md z-20">
          {active === 1 && <BillCard goToCash={() => setActive(3)} goToDetails={() => setActive(2)} />}
          {active === 2 && <DetailsCard />}
          {active === 3 && <CashCard goToPayment={() => setActive(4)} />}
          {active === 4 && <PaymentCard />}
          {active === 5 && (
            <div>
              <h3 className="text-lg font-bold mb-4">Add Details</h3>
              <div className="mb-4">
                <label className="block mb-1">Patient Name:</label>
                <input
                  type="text"
                  name="patientName"
                  value={newRow.patientName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Number of Bills:</label>
                <input
                  type="text"
                  name="numberOfBills"
                  value={newRow.numberOfBills}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Reservation Date:</label>
                <input
                  type="date"
                  name="reservationDate"
                  value={newRow.reservationDate}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Total Amount:</label>
                <input
                  type="number"
                  name="totalAmount"
                  value={newRow.totalAmount}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-md"
                />
              </div>
              <button
                className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md"
                onClick={addDetails}
              >
                Add to Table
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Main;
