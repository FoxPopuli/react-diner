import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Homepage from "./pages/Homepage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
