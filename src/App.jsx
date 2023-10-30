import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from 'react-router-dom';

import { Login, Profile ,MainPage,Front} from "./Components/index.js"

export default function App() {
  return (
    <>
    <Router>
 
      <Routes>
  
        <Route path="/" element={<Front />} />
        <Route path="/MainPage" element={<MainPage/>} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
    </>

  )
}