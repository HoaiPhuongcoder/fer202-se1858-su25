import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import DashBoard from "../pages/DashBoard";
import DashBoardHome from "../pages/DashBoardHome";
import DashBoardSettings from "../pages/DashBoardSettings";
import AppLayout from "../layouts/AppLayout";
import Product from "../pages/Product";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
      {/* Tùy Theo ID mà hiển thị dao diện */}

      <Route path="product/:productId" element={<Product />} />

      <Route path="*" element={<NotFound />} />
      <Route path="dashboard" element={<DashBoard />}>
        <Route path="home" element={<DashBoardHome />} />
        {/* Khi Sài Nested Route Cần để component tên là Outlet ở Component Cha */}
        <Route path="settings" element={<DashBoardSettings />}></Route>
      </Route>
    </Routes>
  );
}

export default AppRoutes;
