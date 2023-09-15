import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
