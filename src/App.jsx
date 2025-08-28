import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ParticipantsPage from "./pages/ParticipantsPage";
import RegisterPage from "./pages/RegisterPage";
import { participantsData } from "./data";
import { useOptimistic } from "./hooks/useOptimistic";
import "./App.css";

export default function App() {
  const [participants, addParticipant] = useOptimistic(participantsData);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<ParticipantsPage participants={participants} />}
        />
        <Route
          path="/register"
          element={<RegisterPage onAdd={addParticipant} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
