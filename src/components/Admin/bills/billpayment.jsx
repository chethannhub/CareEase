import React from "react";

const PaymentCard = () => (
  <div className="bg-white w-96 p-6 rounded-lg shadow-lg font-sans text-center">
    <div className="flex justify-end">
      <button className="text-gray-500 hover:text-gray-700">
        <img className="w-5 h-5" src="./icons/close.svg" alt="Close" />
      </button>
    </div>
    <div className="flex justify-center my-4">
      <img className="w-24 h-24" src="./icons/secure.svg" alt="Success Icon" />
    </div>
    <h2 className="text-2xl font-semibold text-gray-800 mb-2">Payment Success</h2>
    <p className="text-4xl font-bold text-gray-800 mb-2">₹435.00</p>
    <p className="text-sm text-gray-500">12 May 2022 · Bill ID: #BILL00123</p>
    <div className="my-6 border-t pt-4">
      <div className="flex justify-between text-gray-700 text-sm mb-2">
        <span>Treatment (2)</span>
        <span className="font-bold">₹300.00</span>
      </div>
      <div className="flex justify-between text-gray-700 text-sm mb-2">
        <span>Component Used (1)</span>
        <span className="font-bold">₹120.00</span>
      </div>
      <div className="flex justify-between text-gray-700 text-sm">
        <span>Medicine (1)</span>
        <span className="font-bold">₹15.00</span>
      </div>
    </div>
    <div className="my-6 border-t pt-4">
      <div className="flex justify-between text-gray-700 text-sm mb-2">
        <span>Amount Paid</span>
        <span className="font-bold">₹435.00</span>
      </div>
      <div className="flex justify-between text-gray-700 text-sm mb-2">
        <span>Change Money</span>
        <span className="font-bold">₹0.00</span>
      </div>
      <div className="flex justify-between text-gray-700 text-sm">
        <span>Payment Method</span>
        <span className="font-bold">Cash</span>
      </div>
    </div>
    <div className="flex justify-between mt-6">
      <button
        onClick={() => alert("Returning to calendar")}
        className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300"
      >
        Back to Calendar
      </button>
      <button
        onClick={() => alert("Printing receipt")}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Print Receipt
      </button>
    </div>
  </div>
);

export default PaymentCard;
