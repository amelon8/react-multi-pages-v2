import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import InfoPage from "./pages/InfoPage";
import "./App.css";

function App() {
  return (
    <MantineProvider>
      <Router>
        {/* <Navigation /> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/info" element={<InfoPage />} />
        </Routes>
      </Router>
    </MantineProvider>
  );
}

export default App;
