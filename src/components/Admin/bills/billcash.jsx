import React from "react";

const Cash = ({ goToPayment }) => (
  <div className="w-auto h-auto bg-white shadow-lg rounded-lg p-4">
    <div className="flex justify-between items-center mb-4 border-b pb-2">
      <p className="text-lg font-semibold">Cash</p>
      <button>
        <img
          className="w-4 h-4"
          src="./icons/right-arrow-circle-icon.svg"
          alt="right arrow"
        />
      </button>
    </div>

    <div className="mb-4">
      <div className="flex justify-between items-center mb-4">
        <h5 className="text-sm font-medium">Total Payment</h5>
        <h5 className="flex items-center text-sm font-semibold">
          <img className="w-3 h-3 mr-1" src="./icons/rupee.svg" alt="rupee" />
          <p>435.00</p>
        </h5>
      </div>

      <div className="border border-gray-300 rounded-md p-2">
        <div className="bg-gray-100 rounded-md p-2 mb-2">
          <p className="text-sm font-medium">Cash</p>
        </div>

        <div className="mb-4">
          <p className="text-sm text-gray-600 mb-1">Input Amount</p>
          <input
            className="w-full border border-gray-300 rounded-md px-3 py-2"
            type="text"
            placeholder="Enter amount"
          />
        </div>

        <div className="flex justify-between">
          <button className="flex items-center bg-gray-100 border border-gray-300 rounded-md px-2 py-1 text-sm">
            <img className="w-3 h-3 mr-1" src="./icons/rupee.svg" alt="rupee" />
            30.00
          </button>
          <button className="flex items-center bg-gray-100 border border-gray-300 rounded-md px-2 py-1 text-sm">
            <img className="w-3 h-3 mr-1" src="./icons/rupee.svg" alt="rupee" />
            50.00
          </button>
          <button className="flex items-center bg-gray-100 border border-gray-300 rounded-md px-2 py-1 text-sm">
            <img className="w-3 h-3 mr-1" src="./icons/rupee.svg" alt="rupee" />
            20.00
          </button>
          <button className="flex items-center bg-gray-100 border border-gray-300 rounded-md px-2 py-1 text-sm">
            <img className="w-3 h-3 mr-1" src="./icons/rupee.svg" alt="rupee" />
            100.00
          </button>
        </div>
      </div>
    </div>

    <div>
      <button
        className="w-full bg-blue-500 text-white rounded-md py-2 text-sm font-semibold hover:bg-blue-600"
        onClick={goToPayment}
      >
        Pay
      </button>
    </div>
  </div>
);

export default Cash;
