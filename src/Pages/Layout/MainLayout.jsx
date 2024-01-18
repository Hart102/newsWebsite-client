import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const MainLayout = ({ children }) => {
  return (
    <div className="w-screen min-h-screen bg-neutral-950 text-neutral-300">
      <Navbar />
      {children}
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
