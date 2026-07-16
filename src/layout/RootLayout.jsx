import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";

const RootLayout = () => {
  return (
    <div className="flex">
      <SideBar />
      <div className="flex-1 flex flex-col min-h-screen">
        <NavBar />
        <main className="flex-1 p-6 bg-blue-100 overflow-auto mt-12">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default RootLayout;
