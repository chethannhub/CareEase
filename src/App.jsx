import React from "react";
import Landing from "./components/Landing";
import SignIn from "./components/signin";
import SignUp from "./components/signup";

import Dashboard from "./components/Admin/dashboard/MainContent";
import Reservation from "./components/Admin/reservations/MainContent";
import AdminStaffList from "./components/Admin/Admin-staff-list/Admin-staff-list";
import Treatment from "./components/Admin/treatment/mainContent";
import Beds from "./components/Admin/BedsAvaliablity/main";
import Bills from "./components/Admin/bills/main";

import PatientDashboard from "./components/Patient/Dashboard/PtMainContent";
import BookAppointment from "./components/Patient/appointment/mainContent";
import PatientSchedules from "./components/Patient/PatientSchedules/mainContent";
import PatientProfile from "./components/Patient/PatientProfile/mainContent";
import "./App.css";
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <div className="bg-[#f3f4f6]">
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />

        <Route path='/admin' element={<Dashboard />} />
        <Route path='/admin-dashboard'  element={<Dashboard />} />
        <Route path='/admin-reservations' element={<Reservation />} />
        <Route path='/admin-staff' element={<AdminStaffList />} />
        <Route path='/admin-treatment' element={<Treatment />} />
        <Route path='/admin-bills' element={<Bills />} />
        <Route path='/admin-beds' element={<Beds />} />

        <Route path='/patient' element={<PatientDashboard />} />
        <Route path='/patient-dashboard' element={<PatientDashboard />} />
        <Route path='/patient-book-appointment' element={<BookAppointment />} />
        <Route path="patient-schedules" element={<PatientSchedules/>}/>
        <Route path="patient-profile" element={<PatientProfile/>}/>
      </Routes>
    </div>
    </>
  );
}

export default App;
