import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import About from "./pages/About";
import Store from "./pages/Store";
import Consultancy from "./pages/Consultancy";
import Gallery from "./pages/Gallary";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import BookAppointmentForm from "./pages/BookYourAppointment";
import Checkout from "./pages/Checkout";
import EventPage from "./pages/EventPage";
import BlogsPage from "./pages/BlogPage";
import BlogDetail from "./pages/BlogDetail";
import ProductsPage from "./pages/ProductsPage";
import ProductReviews from "./pages/ProductsReview";
import SuccessStoriesPage from "./pages/SuccessStoriesPage";
import SuccessStoryDetail from "./pages/SuccessStoryDetail";
import EventDetails from "./pages/EventDetails";
import { Book } from "lucide-react";
import Books from "./pages/Books";
import BusinessTools from "./pages/BusinessTools";

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
          
          <Route path="/gallery" element={<Gallery/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/bookappointment" element={<BookAppointmentForm/>} />
          <Route path="/checkout" element = {<Checkout/>}/>
          <Route path="/event" element={<EventPage/>} />
          <Route path="/event/:eventId" element={<EventDetails/>} />
          <Route path="/blog" element={<BlogsPage/>} />
          <Route path="/blog/:blogId" element={<BlogDetail/>} />
          <Route path="/products" element={<ProductsPage/>} />
          <Route path="/products/:productId" element={<ProductReviews/>} />
          <Route path="/success-stories" element={<SuccessStoriesPage/>}/>
          <Route path="/success-stories/:storyId" element={<SuccessStoryDetail/>}/>
          <Route path="/books" element = {<Books/>}/>
          <Route path="/business-tools" element= {<BusinessTools/>}/>

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
