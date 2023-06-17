import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { Search } from "./components/Search/Search";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
