import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import Contact from "./pages/Contact";
import DashBoard from "./pages/DashBoard";
import Detail from "./pages/Detail";
import Update from "./pages/Update";
import Create from "./pages/Create";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="management" element={<DashBoard />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/students/:id" element={<Detail />} />
          <Route path="update/:id" element={<Update />} />
          <Route path="create" element={<Create />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
