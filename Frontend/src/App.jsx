import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import About from "./pages/About";
import Store from "./pages/Store";
import Consultancy from "./pages/Consultancy";
import Resources from "./pages/Resources";
import Gallery from "./pages/Gallary";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import BookAppointmentForm from "./pages/BookYourAppointment";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home/>} />
          <Route path="/courses" element={<Courses/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/store" element={<Store/>} />
          <Route path="/consultancy" element={<Consultancy/>} />
          <Route path="/resources" element={<Resources/>} />
          <Route path="/gallery" element={<Gallery/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/bookappointment" element={<BookAppointmentForm/>} />

          {/* Safety fallback */}
          <Route
            path="*"
            element={<div className="pt-28 px-6">Page not found</div>}
          />
        </Route>
        <Route path="/login" element={<Login/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
