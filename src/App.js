import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Homepage from "./pages/Homepage";
import AboutPage from "./pages/AboutPage";
import MainMenuPage from "./pages/MainMenuPage";
import ReservationsPage from "./pages/ReservationsPage";
import ContactPage from "./pages/ContactPage";
import ConstructionPage from "./pages/ConstructionPage";
import SushiMenuPage from "./pages/SushiMenuPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/react-diner" element={<Homepage />}></Route>
        <Route path="/construction" element={<ConstructionPage />}></Route>
        <Route path="/sushi-menu" element={<SushiMenuPage />}></Route>

        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/main-menu" element={<MainMenuPage />}></Route>
        <Route path="/reservations" element={<ReservationsPage />}></Route>
        <Route path="/contact" element={<ContactPage />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
