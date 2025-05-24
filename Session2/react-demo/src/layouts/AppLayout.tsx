import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";

function AppLayout() {
  return (
    <div>
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
