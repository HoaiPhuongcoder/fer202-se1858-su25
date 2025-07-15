import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNavbar from "./components/MyNavbar";
import Home from "./pages/Home";
import CardDetail from "./pages/CardDetail";
import AllCard from "./pages/AllCard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MyNavbar />}>
          <Route path="/" element={<Home />} />
          <Route path="SE184137/:id" element={<CardDetail />} />
          <Route path="SE184137/AllCards" element={<AllCard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
