import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./Components/Layouts/Navbar/Navbar"
import Home from "./Pages/Home/Home"
import Collections from "./Pages/Collections/Collections"
import Benefits from "./Pages/Benefits/Benefits"
import Member from "./Pages/Member/Member"
import Cart from "./Pages/Cart/Cart"
import Footer from "./Pages/Footer/Footer"
function App({ theme }) {
  return (
    <div className={`App ${theme}`}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="collections" element={<Collections />} />
            <Route path="benefits" element={<Benefits />} />
            <Route path="member" element={<Member />} />
            <Route path="cart" element={<Cart />} />
          </Route>
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  )
}

export default App
