import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./Navbar";
import MainLandingPage from "./MainLandingPage";
import FooterNav from "./FooterNav";
import Cards from "./Cards";
import Register from "./Register";
import Login from "./Login";
import Bookings from "./Bookings";
import RatingAndReview from "./RatingAndReview";
import AccommodationLists from "./AccommodationLists";
import RoomInputOwner from "./RoomInputOwner";
import Error from "./Error";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavigationBar />
        {/* <MainLandingPage /> */}
        {/* <Cards /> */}
        {/* <AccommodationLists /> */}
        {/* <RoomInputOwner /> */}
        {/* <Bookings /> */}
        {/* <RatingAndReview />  */}
        {/* <Register /> */}
        {/* <Login /> */}
        <FooterNav />
      </div>
      <Routes>
        <Route path="/" element={<MainLandingPage />} />
        <Route path="/searchedcity" element={<Cards />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/ratingandreview" element={<RatingAndReview />} />
        <Route path="/accommodationlist" element={<AccommodationLists />} />
        <Route path="/roominputowner" element={<RoomInputOwner />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
