import React, { useState } from "react";

// Sample data for appointments
const appointmentsData = [
  {
    id: "RSV10102",
    date: "APR 25",
    day: "25",
    time: "10:00 - 11:00 AM",
    title: "Tooth Scaling",
    type: "MULTIPLE",
    details: "Visit #2 - Scaling Maxilla (Q1+Q2)",
    hospital: "Zendral Dental",
    status: "upcoming",
  },
  {
    id: "RSV10105",
    date: "APR 20",
    day: "20",
    time: "09:00 - 10:00 AM",
    title: "Simple extractions",
    type: "MULTIPLE",
    details: "Visit #2 - Simple extractions (Q1+Q2)",
    hospital: "Zendral Dental",
    status: "finished",
    payment: "240.00",
    payButton: true,
  },
  {
    id: "RSV10094",
    date: "APR 19",
    day: "19",
    time: "17:00 - 18:00 PM",
    title: "Emergency care",
    type: "SINGLE",
    details: "",
    hospital: "Zendral Dental",
    status: "finished",
    paymentStatus: "PAID",
  },
];

const PatientSchedule = () => {
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [isPaying, setIsPaying] = useState(false);

  const openPaymentModal = (appointment) => {
    setSelectedAppointment(appointment);
    setShowPaymentModal(true);
  };

  const closePaymentModal = () => {
    setShowPaymentModal(false);
    setSelectedAppointment(null);
    setIsPaying(false);
  };

  const handlePayment = () => {
    setIsPaying(true);
    setTimeout(() => {
      setIsPaying(false);
      closePaymentModal();
      alert("Payment successful!");
    }, 2000);
  };

  return (
    <div className="space-y-8">
      {/* Upcoming Section */}
      <div>
        <div className="flex items-center space-x-2 text-lg font-semibold text-gray-800">
          <span className="text-blue-500">&#9679;</span>
          <span>Upcoming ({appointmentsData.filter(a => a.status === "upcoming").length})</span>
        </div>
        {appointmentsData.filter(a => a.status === "upcoming").map((appointment, index, arr) => (
          <AppointmentCard
            key={appointment.id}
            appointment={appointment}
            isLast={index === arr.length - 1}
            onPay={openPaymentModal}
          />
        ))}
      </div>

      {/* Finished Section */}
      <div>
        <div className="flex items-center space-x-2 text-lg font-semibold text-gray-800">
          <span className="text-green-500">&#9679;</span>
          <span>Finished ({appointmentsData.filter(a => a.status === "finished").length})</span>
        </div>
        {appointmentsData.filter(a => a.status === "finished").map((appointment, index, arr) => (
          <AppointmentCard
            key={appointment.id}
            appointment={appointment}
            isLast={index === arr.length - 1}
            onPay={openPaymentModal}
          />
        ))}
      </div>

      {/* Payment Modal */}
      {showPaymentModal && (
        <PaymentModal
          appointment={selectedAppointment}
          isPaying={isPaying}
          onClose={closePaymentModal}
          onPay={handlePayment}
        />
      )}
    </div>
  );
};

const AppointmentCard = ({ appointment, onPay }) => {
    const lineColor = appointment.status === "upcoming" ? "bg-blue-500" : "bg-green-500";
    const textColor = appointment.status === "upcoming" ? "text-blue-500" : "text-green-500";
  
    return (
      <div className="flex items-start space-x-4 mb-4 relative">
        {/* Timeline Date */}
        <div className="flex flex-col items-center relative">
          <span className={`${textColor} text-xs font-bold mb-2`}>{appointment.date}</span>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${lineColor} text-white font-bold`}>
            {appointment.day}
          </div>
          {/* Timeline Line */}
          <div className={`${lineColor} w-1`} style={{ height: '130px', marginTop: '4px' }} />
        </div>
  
        {/* Appointment Details */}
        <div className="flex-1 p-4 bg-white rounded-lg shadow-lg border">
          <div className="flex justify-between items-center">
            <span className="text-gray-700 text-sm font-medium">{appointment.time}</span>
            <span className="text-gray-500 text-xs">#{appointment.id}</span>
          </div>
          <h3 className="text-md font-semibold mt-2">{appointment.title}</h3>
          
          {/* Tooltip for type */}
          <div className="flex items-center mt-1 relative group">
            <span className={`px-2 py-1 text-xs font-semibold rounded-full text-white ${appointment.type === "MULTIPLE" ? "bg-purple-500" : "bg-green-400"}`}>
              {appointment.type}
            </span>
            <span className="absolute hidden group-hover:block left-12 px-2 py-1 text-xs rounded-md bg-gray-800 text-white">
              {appointment.type === "MULTIPLE" ? "Multiple treatments" : "Single treatment"}
            </span>
          </div>
  
          <p className="text-gray-500 text-sm mt-1">{appointment.details}</p>
          <div className="text-gray-500 text-sm mt-1">
            <span className="material-icons text-sm mr-1">location_on</span>
            {appointment.hospital}
          </div>
  
          {/* Payment / Pay button in a row */}
          {appointment.status === "finished" && (
            <div className="mt-4 flex justify-between items-center">
              {appointment.payment && (
                <div className="text-gray-700">
                  <span className="text-sm">Total payment</span>
                  <span className="font-semibold ml-2">${appointment.payment}</span>
                </div>
              )}
              {appointment.payButton ? (
                <button
                  onClick={() => onPay(appointment)}
                  className="px-4 py-2 bg-blue-600 text-white text-sm rounded-md shadow hover:bg-blue-700"
                >
                  Pay
                </button>
              ) : (
                <span className="text-green-500 text-sm font-semibold">{appointment.paymentStatus}</span>
              )}
            </div>
          )}
        </div>
      </div>
    );
  };
  
  
      
  

// Payment Modal Component
const PaymentModal = ({ appointment, onClose, onPay, isPaying }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="w-11/12 max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold text-gray-800">Select Payment Method</h3>
        <p className="text-gray-600 text-sm mt-2">
          Complete your payment of <span className="font-bold">${appointment.payment}</span> for <span className="font-semibold">{appointment.title}</span>.
        </p>

        {/* Payment Options */}
        <div className="mt-4 space-y-3">
          <button className="w-full px-4 py-3 bg-gray-100 rounded-lg text-gray-700 font-medium hover:bg-gray-200">
            Credit Card
          </button>
          <button className="w-full px-4 py-3 bg-gray-100 rounded-lg text-gray-700 font-medium hover:bg-gray-200">
            Debit Card
          </button>
          <button className="w-full px-4 py-3 bg-gray-100 rounded-lg text-gray-700 font-medium hover:bg-gray-200">
            Net Banking
          </button>
          <button className="w-full px-4 py-3 bg-gray-100 rounded-lg text-gray-700 font-medium hover:bg-gray-200">
            UPI
          </button>
          <button className="w-full px-4 py-3 bg-gray-100 rounded-lg text-gray-700 font-medium hover:bg-gray-200">
            Wallet
          </button>
        </div>

        {/* Close Button */}
        <div className="mt-6 flex justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
          >
            Cancel
          </button>
          <button
            onClick={onPay}
            disabled={isPaying}
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
          >
            {isPaying ? "Processing..." : "Confirm Payment"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PatientSchedule;
