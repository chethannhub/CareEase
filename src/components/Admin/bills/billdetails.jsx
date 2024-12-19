import React from "react";

const Details = () => (
  <div className="bg-white w-96 h-[800px] shadow-md p-4 rounded-lg">
       <div className="flex justify-between items-center border-b pb-2 mb-4">
      <p className="text-lg font-bold">Bill Details</p>
      <img
        className="w-4 h-4"
        src="./icons/right-arrow-circle-icon.svg"
        alt="right-arrow"
      />
    </div>

    <div className="p-4 border-b">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center font-bold">
          <img
            className="w-5 h-5 mr-2"
            src="./icons/bill-treatment.svg"
            alt="treatment"
          />
          <p>Treatment (2)</p>
        </div>
        <div className="flex items-center">
          <p>Total: </p>
          <img className="w-3 h-3 mx-1" src="./icons/rupee.svg" alt="rupee" />
          <p>300.00</p>
        </div>
      </div>

      <div className="flex justify-between items-center mb-2">
        <div>
          <p className="font-medium">Tooth Filling</p>
          <p className="text-sm text-gray-500">2nd molar (18), 3rd molar (17)</p>
        </div>
        <div className="flex items-center font-bold">
          <img className="w-3 h-3 mr-1" src="./icons/rupee.svg" alt="rupee" />
          <p>220.00</p>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div>
          <p className="font-medium">Tooth Cleaning</p>
          <p className="text-sm text-gray-500">Maxilla, Mandible</p>
        </div>
        <div className="flex items-center font-bold">
          <img className="w-3 h-3 mr-1" src="./icons/rupee.svg" alt="rupee" />
          <p>80.00</p>
        </div>
      </div>
    </div>

    <div className="p-4 border-b">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center font-bold">
          <img
            className="w-5 h-5 mr-2"
            src="./icons/component.svg"
            alt="component"
          />
          <p>Component Used (2)</p>
        </div>
        <div className="flex items-center">
          <p>Total: </p>
          <img className="w-3 h-3 mx-1" src="./icons/rupee.svg" alt="rupee" />
          <p>120.00</p>
        </div>
      </div>

      <div className="flex justify-between items-center mb-2">
        <p className="font-medium">Anesthetic (1)</p>
        <p className="text-sm text-gray-500">Included in service</p>
      </div>

      <div className="flex justify-between items-center">
        <p className="font-medium">Composite Porcelain (5)</p>
        <div className="flex items-center font-bold">
          <img className="w-3 h-3 mr-1" src="./icons/rupee.svg" alt="rupee" />
          <p>120.00</p>
        </div>
      </div>
    </div>

    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center font-bold">
          <img
            className="w-5 h-5 mr-2"
            src="./icons/medicine.svg"
            alt="medicine"
          />
          <p>Medicine (1)</p>
        </div>
        <div className="flex items-center">
          <p>Total: </p>
          <img className="w-3 h-3 mx-1" src="./icons/rupee.svg" alt="rupee" />
          <p>15.00</p>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div>
          <p className="font-medium">Asam Mefenamat (1)</p>
          <p className="text-sm text-gray-500">Paid Medicine</p>
        </div>
        <div className="flex items-center font-bold">
          <img className="w-3 h-3 mr-1" src="./icons/rupee.svg" alt="rupee" />
          <p>15.00</p>
        </div>
      </div>
    </div>
  </div>
);

export default Details;
