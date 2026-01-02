import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Landing from "./pages/Landing";
import Upload from "./pages/Upload";
import Processing from "./pages/Processing";
import Result from "./pages/Result";
import Navbar from "./components/layout/landing/Navbar";

function App() {
  const location = useLocation();

  return (
    <>
      

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Landing />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/processing" element={<Processing />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
