import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "../../components/NavBar";
import AuthPage from "../AuthPage/AuthPage";
import FitnessPage from "../FitnessPage/FitnessPage";
import DashboardPage from "../DashboardPage/DashboardPage";
import CommunityPage from "../CommunityPage/CommunityPage";
import RecommendationsPage from "../RecommendationsPage/RecommendationsPage";

export default function App() {
  const [user, setUser] = useState(false);
  return (
    <>
      {user ? (
        <>
          <NavBar />
          <Routes>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/fitness" element={<FitnessPage />} />
            <Route path="/recommendations" element={<RecommendationsPage />} />
            <Route path="/community" element={<CommunityPage />} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </>
  );
}
