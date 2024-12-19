import React, { useState } from "react";

const BillCard = ({ goToCash, goToDetails }) => {
  const [selectedAccount, setSelectedAccount] = useState("free-cash");
  const [note, setNote] = useState("");

  return (
    <div className="max-w-md bg-white rounded-lg shadow-lg p-4 font-sans leading-snug">
    
      <div className="flex justify-between items-center border-b pb-2 mb-4">
        <div>
          <p className="text-gray-500 text-xs">BILL ID</p>
          <h3 className="text-lg font-semibold">#BILL00124</h3>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center border border-gray-300 px-2 py-1 rounded text-blue-500 hover:bg-gray-100">
            <img className="w-4 h-4 mr-1" src="./icons/comment.svg" alt="icon" />
            History & Comment
          </button>
          <button className="border border-gray-300 px-2 py-1 rounded hover:bg-gray-100">
            <img className="w-4 h-4" src="./icons/menu.svg" alt="Menu" />
          </button>
          <button className="border border-gray-300 px-2 py-1 rounded hover:bg-gray-100">
            <img className="w-4 h-4" src="./icons/close.svg" alt="Close" />
          </button>
        </div>
      </div>

      <div className="mb-4">
        <p className="text-sm mb-2">Select Account:</p>
        <select
          className="w-full border border-gray-300 rounded p-2"
          value={selectedAccount}
          onChange={(e) => setSelectedAccount(e.target.value)}
        >
          <option value="free-cash">Free Cash</option>
          <option value="drug-purchase">Drug Purchase</option>
          <option value="treatment-fund">Treatment Fund</option>
          <option value="stock-fund">Stock Fund</option>
        </select>
      </div>

     
      <div className="flex justify-between mb-4">
        <div>
          <p className="text-sm text-gray-500">Bill To</p>
          <h4 className="font-semibold">Esther Howard</h4>
          <p className="text-sm text-gray-600">
            Jl. PuloRaya X No.14, Kebayoran Baru, Jakarta Selatan 12110
          </p>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-500">Bill Date</p>
          <p className="text-sm">12/06/2022</p>
          <span className="px-2 py-1 text-xs font-bold text-pink-600 bg-pink-100 border border-pink-300 rounded">
            UNPAID
          </span>
        </div>
      </div>

     
      <div className="mb-4">
        <div className="flex justify-between bg-gray-100 border border-gray-300 rounded px-3 py-2 mb-2">
          <span className="font-medium">Bill Name</span>
          <span className="font-medium">Amount</span>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="font-semibold">Treatment (2)</span>
            <span className="flex items-center">
              <img className="w-3 h-3 mr-1" src="./icons/rupee.svg" alt="rupee" />
              300.00
            </span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Component Used (1)</span>
            <span className="flex items-center">
              <img className="w-3 h-3 mr-1" src="./icons/rupee.svg" alt="rupee" />
              120.00
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-semibold">Medicine (1)</span>
            <button
              onClick={goToDetails}
              className="text-blue-500 border border-gray-300 rounded px-2 py-1 text-sm hover:bg-gray-100"
            >
              View Details
            </button>
            <span className="flex items-center">
              <img className="w-3 h-3 mr-1" src="./icons/rupee.svg" alt="rupee" />
              15.00
            </span>
          </div>
        </div>
      </div>

     
      <div className="mb-4">
        <div className="flex justify-between items-center text-sm text-gray-500 mb-1">
          <p>Add Note</p>
          <span>(Optional)</span>
        </div>
        <textarea
          className="w-full border border-gray-300 rounded p-2"
          placeholder="Type a Message"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <div className="flex justify-between py-1">
          <span className="text-gray-500">Subtotal</span>
          <span className="flex items-center">
            <img className="w-3 h-3 mr-1" src="./icons/rupee.svg" alt="rupee" />
            435.00
          </span>
        </div>
        <div className="flex justify-between py-1">
          <span className="text-gray-500">Tax</span>
          <span className="flex items-center">
            <img className="w-3 h-3 mr-1" src="./icons/rupee.svg" alt="rupee" />
            0.00
          </span>
        </div>
        <div className="flex justify-between py-1 font-semibold">
          <span>Total</span>
          <span className="flex items-center">
            <img className="w-3 h-3 mr-1" src="./icons/rupee.svg" alt="rupee" />
            435.00
          </span>
        </div>
      </div>
     
      <p className="text-xs text-gray-500 flex items-center mb-4">
        <img className="w-4 h-4 mr-2" src="./icons/secure.svg" alt="secure" />
        All your transactions are secure and fast
      </p>

      <div className="border border-gray-300 rounded p-4">
        <p className="mb-4">Select a payment method</p>
        <button
          className="w-full bg-blue-500 text-white rounded px-3 py-2 mb-2 font-semibold hover:bg-blue-600"
          onClick={goToCash}
        >
          Cash
        </button>
        <button className="w-full bg-gray-100 border border-blue-500 text-blue-500 rounded px-3 py-2 font-semibold hover:bg-blue-100">
          Credit Card
        </button>
      </div>
    </div>
  );
};

export default BillCard;
