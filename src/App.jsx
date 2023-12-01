import * as React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import UnderConstruction from "./components/UnderConstruction/UnderConstruction.jsx";
import Home from "./Sections/Home";
import EventsPage from "./Sections/EventsPage.jsx";
import JiuJitsuClasses from "./Sections/JiuJitsuClasses.jsx";
import KickboxingClasses from "./Sections/KickboxingClasses.jsx";
import FitnessClasses from "./Sections/FitnessClasses.jsx";
import KidsClasses from "./Sections/KidsClasses.jsx";
import GymRentalsPage from "./Sections/GymRentalsPage.jsx";
import BookAClass from "./Sections/BookAClass.jsx";
import AboutOurCoaches from "./Sections/AboutOurCoaches.jsx";
import ClassSchedule from "./Sections/ClassSchedule.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programs" element={<Home />} />
        <Route path="/events" element={<EventsPage />} />
        <Route
          path="/toronto-jiu-jitsu-classes"
          element={<JiuJitsuClasses />}
        />
        <Route
          path="/toronto-kickboxing-classes"
          element={<KickboxingClasses />}
        />
        <Route path="/toronto-fitness-classes" element={<FitnessClasses />} />
        <Route path="/toronto-kids-martial-arts" element={<KidsClasses />} />
        <Route path="/about-our-coaches" element={<AboutOurCoaches />} />
        <Route path="/?/gym-rentals" element={<GymRentalsPage />} />
        <Route path="/contact-free-trial-class" element={<Home />} />
        <Route path="/book-a-class" element={<BookAClass />} />
        <Route path="/schedule" element={<ClassSchedule />} />
      </Routes>
    </Router>
  );
};

export default App;
