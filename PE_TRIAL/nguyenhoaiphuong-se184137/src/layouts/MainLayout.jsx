import { Outlet } from "react-router";
import MyNavbar from "../components/MyNavbar";

function MainLayout() {
  return (
    <div>
      <MyNavbar />
      <Outlet />
    </div>
  );
}

export default MainLayout;
