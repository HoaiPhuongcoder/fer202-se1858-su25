import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import ToggleDarkMode from "./components/ToggleDarkMode";
import { useDarkMode } from "./hooks/useDarkMode";
import data from "./ListOfOrchids";

function App() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <div className="dark:bg-gray-800/95">
      <div className="bg-white dark:bg-gray-800/95">
        <ToggleDarkMode
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
        />
        <Navbar />
        <ProductList data={data} />
      </div>
    </div>
  );
}

export default App;
