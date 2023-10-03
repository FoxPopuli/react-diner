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
        {/* <Route path="/" element={<Homepage />}></Route> */}
        <Route path="/react-diner" element={<Homepage />}></Route>
        <Route
          path="/react-diner/construction"
          element={<ConstructionPage />}
        ></Route>
        <Route
          path="/react-diner/sushi-menu"
          element={<SushiMenuPage />}
        ></Route>

        <Route path="/react-diner/about" element={<AboutPage />}></Route>
        <Route path="/react-diner/main-menu" element={<MainMenuPage />}></Route>
        <Route
          path="/react-diner/reservations"
          element={<ReservationsPage />}
        ></Route>
        <Route path="/react-diner/contact" element={<ContactPage />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
