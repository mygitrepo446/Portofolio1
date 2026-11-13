import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Nordloom } from "./pages/Nordloom";
import { SignalDraft } from "./pages/SignalDraft";
import { Harborflow } from "./pages/Harborflow";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/demos/nordloom" element={<Nordloom />} />
      <Route path="/demos/signaldraft" element={<SignalDraft />} />
      <Route path="/demos/harborflow" element={<Harborflow />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
