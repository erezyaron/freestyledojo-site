import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Sections/Home'
import Schedule from './Sections/Schedule';
import Programs from './Sections/Programs';
import About from './Sections/About';
import GymRentals from './Sections/GymRentals';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/schedule' element={<Schedule />} />
        <Route path='/programs' element={<Programs />} />
        <Route path='/about' element={<About/>} />
        <Route path='/gym-rentals' element={<GymRentals/>} />
      </Routes>
    </Router>
  )
}

export default App
