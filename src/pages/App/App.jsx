import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "../../components/NavBar";
import AuthPage from "../AuthPage/AuthPage";
import FitnessPage from "../FitnessPage/FitnessPage";
import DashboardPage from "../DashboardPage/DashboardPage";
import CommunityPage from "../CommunityPage/CommunityPage";
import RecommendationsPage from "../RecommendationsPage/RecommendationsPage";
import EntriesPage from "../EntriesPage/EntriesPage";

export default function App() {
  const [user, setUser] = useState(false);

  const handleClick = () => {
    setUser(!user);
  };

  return (
    <>
      <button onClick={handleClick}>Tmp button to toggle setUser state</button>
      <NavBar />

      {user ? (
        <>
          {" "}
          <Routes>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/fitness" element={<FitnessPage />} />
            <Route path="/fitness/new" element={<EntriesPage />} />
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
