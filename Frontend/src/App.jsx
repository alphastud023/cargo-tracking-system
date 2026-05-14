import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/home"; // ✅ correct path
import Quote from "./pages/Quote";
import Admin from "./pages/Admin/Admin";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quote" element={<Quote />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
}


