import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router";
import MyNavbar from "./components/MyNavbar";
import Home from "./pages/Home";
import AllCards from "./pages/AllCards";
import DetailCard from "./pages/DetailCard";
import UnAvailableCards from "./pages/UnAvailableCards";
import Add from "./pages/Add";
import Update from "./pages/Update";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MyNavbar />}>
          <Route path="/" element={<Home />} />
          <Route path="SE184137/AllCards" element={<AllCards />} />
          <Route path="card/:id" element={<DetailCard />} />
          <Route path="SE184137/Add" element={<Add />} />
          <Route
            path="SE184137/UnavailableCards"
            element={<UnAvailableCards />}
          />
          <Route path="SE184137/Update/:id" element={<Update />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
