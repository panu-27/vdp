import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import BottomTab from "../components/BottomTab";



const CheckoutLayout = () => {
  return (
    <>
      <Navbar />
      <main className="pt-20 min-h-screen">
        <Outlet />
      </main>
      <BottomTab />
      
    </>
  );
};

export default CheckoutLayout;
