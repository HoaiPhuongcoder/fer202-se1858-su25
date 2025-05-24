import { Outlet } from "react-router";

function DashBoard() {
  return (
    <div>
      <div>DashBoard</div>
      <Outlet />
    </div>
  );
  //   Nội dung các trang con sẽ nằm ở Outlet
}

export default DashBoard;
