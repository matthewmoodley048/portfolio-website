import React from 'react'
import Home from './routes/home'
import NavBar from './components/navbar'
import Footer from './components/footer.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </React.Fragment>
  )
}
export default App
