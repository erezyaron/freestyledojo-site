import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import EventsPage from './Pages/EventsPage'
import JiuJitsuClassesPage from './Pages/JiuJitsuClasses'
import KickboxingClassesPage from './Pages/KickboxingClasses'
import FitnessClassesPage from './Pages/FitnessClasses'
import KidsClassesPage from './Pages/KidsClasses'
import AboutOurCoachesPage from './Pages/AboutOurCoaches'
import GymRentalsPage from './Pages/GymRentalsPage'
import BookAClassPage from './Pages/BookAClass'
import ClassSchedulePage from './Pages/ClassSchedule'
import HolidaySpecialPage from './Pages/HolidaySpecial'
import { useEffect } from 'react'
import PricesPage from './Pages/PricesPage'
import FacilitiesPage from './Pages/FacilitiesPage'
import MapPage from './Pages/MapPage'

function App() {
  console.log(location.pathname)
  useEffect(() => {
    if (window.location.pathname !== '/' && window.location.hash === '') {
      window.location.replace(`/#${window.location.pathname}`);
    }
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/prices" element={<PricesPage />} />
        <Route path="/facilities" element={<FacilitiesPage />} />
        <Route path="/programs" element={<HomePage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/toronto-jiu-jitsu-classes" element={<JiuJitsuClassesPage />} />
        <Route path="/toronto-mma-classes" element={<KickboxingClassesPage />} />
        <Route path="/toronto-fitness-classes" element={<FitnessClassesPage />} />
        <Route path="/toronto-kids-martial-arts" element={<KidsClassesPage />} />
        <Route path="/about-our-coaches" element={<AboutOurCoachesPage />} />
        <Route path="/gym-rentals" element={<GymRentalsPage />} />
        <Route path="/contact-free-trial-class" element={<HomePage />} />
        <Route path="/book-a-class" element={<BookAClassPage />} />
        <Route path="/schedule" element={<ClassSchedulePage />} />
        <Route path="/holidayspecial" element={<HolidaySpecialPage />} />
        <Route path="/holidayoffer" element={<HolidaySpecialPage />} />
        <Route path="/map" element={<MapPage />} />
      </Routes>
    </Router>
  )
}

export default App
