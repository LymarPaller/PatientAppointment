import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Navbar from "../components/navbar/Navbar"
import Footer from "../components/footer/Footer"


function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
            <Navbar/>
            <Home/>
            <Footer/>
          </>
        }/>
        
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
