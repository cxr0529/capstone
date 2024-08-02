import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar.js';
import Landing_Page from './Components/Landing_Page/LandingPage.js';
import Sign_Up from './Components/Sign_Up/Sign_Up.js';
import Login from './Components/Login/Login.js';
import InstantConsultation from './Components/InstantConsultationBooking/InstantConsultation.js';
import BookingConsultation from './Components/BookingConsultation.js';
import Notification from './Components/Notification/Notification.js';
import ReviewForm from './Components/ReviewForm/ReviewForm.js';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Navbar/>
          <Notification>
          <Routes>
            <Route path= "/" element={<Landing_Page/>}/>
            <Route path= "Sign_Up" element={<Sign_Up/>}/>
            <Route path= "Login" element={<Login/>}/>
            <Route path= "Instant" element={<InstantConsultation/>}/>
            <Route path= "Booking" element={<BookingConsultation/>}/>
            <Route path= "Review" element={<ReviewForm/>}/>
          </Routes>
          </Notification>
        </BrowserRouter>
    </div>
  );
}

export default App;