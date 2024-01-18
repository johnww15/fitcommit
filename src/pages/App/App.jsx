import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import LoginForm from "../../components/LoginForm";
import SignUpForm from "../../components/SignUpForm";
import FitnessPage from "../FitnessPage/FitnessPage";
import DashboardPage from "../DashboardPage/DashboardPage";
import CommunityPage from "../CommunityPage/CommunityPage";
import RecommendationsPage from "../RecommendationsPage/RecommendationsPage";

export default function App() {
  const [user, setUser] = useState(null);
  return (
    <>
      <h1>Welcome</h1>
      <LoginForm />
      <SignUpForm />

      <h2>User is loggedin</h2>
      <Routes>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/fitness" element={<FitnessPage />} />
        <Route path="/recommendations" element={<RecommendationsPage />} />
        <Route path="/community" element={<CommunityPage />} />
      </Routes>
    </>
  );
}
