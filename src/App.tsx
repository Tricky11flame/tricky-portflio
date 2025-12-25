import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portfolio from "@/pages/Portfolio.tsx";
import Extra from "@/pages/Extra.tsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/extra" element={<Extra />} />
      </Routes>
    </BrowserRouter>
  );
}