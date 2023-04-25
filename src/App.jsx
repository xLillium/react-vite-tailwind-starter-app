import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import Page1 from "./pages/Page1.jsx";
import Page2 from "./pages/Page2.jsx";
import "./App.css";

const App = () => {
  return (
    <Router>
      <>
        <Header />
        <main>
          <div className="pt-[30vh]">
            <Routes>
              <Route index element={<Home />} />
              <Route path="/page1" element={<Page1 />} />
              <Route path="/page2" element={<Page2 />} />
            </Routes>
          </div>
        </main>
      </>
    </Router>
  );
};

export default App;
