import { useRef, useState, useEffect } from "react";
import axios from "axios";
import { Outlet, useNavigate } from "react-router-dom";
import SideBar from "@/components/SideBar/index";
import SearchBar from "@/components/SearchBar/index";
import { proxy } from "@/util";
// import { SideBar, SeachBar, proxy } from "../../component";

const DashboardLayout = ({ children }) => {
  const SideBarRef = useRef();
  const navigate = useNavigate();
  const [user, setUser] = useState(false);

  const handleToggle = (element) =>
    element.current.classList.contains("hidden")
      ? element.current.classList.remove("hidden")
      : element.current.classList.add("hidden");

  useEffect(() => {
    // axios
    //   .get(`${proxy}/session`)
    //   .then((response) =>
    //     !response.data.success
    //       ? navigate("/blog/login")
    //       : setUser(response.data.success)
    //   );
  }, []);

  return (
    <div className="relative lg:p-8 bg-neutral-950 text-neutral-300 min-h-screen verflow-y-hidden">
      <div className="container h-full relative grid grid-cols-2">
        <SideBar UseRef={SideBarRef} onclick={SideBarRef} />
        <div className="w-full lg:w-[80%] absolute right-0">
          <SearchBar onclick={() => handleToggle(SideBarRef)} />
          {children}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
