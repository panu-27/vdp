import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BottomTab from "../components/BottomTab";
import ChatWidget from "../components/chatbot/ChatWidget";


const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main className="pt-20 min-h-screen">
        <Outlet />
      </main>
      <Footer />
      <BottomTab />
      <ChatWidget />
    </>
  );
};

export default MainLayout;
