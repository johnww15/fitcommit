import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import SideNavBar from "../../components/SideNavBar";
import AuthPage from "../AuthPage/AuthPage";
import ProgressPage from "../ProgressPage/ProgressPage";
import DashboardPage from "../DashboardPage/DashboardPage";
import CommunityPage from "../CommunityPage/CommunityPage";
import RoulettePage from "../RoulettePage/RoulettePage";
import EntriesPage from "../EntriesPage/EntriesPage";
import FavouritesPage from "../FavouritesPage/FavouritesPage";

export default function App() {
  const [user, setUser] = useState(false);
  //to be used in RoulettePage and RouletteInputBar
  const [selectedMuscle, setSelectedMuscle] = useState("");

  const handleMuscleChange = (muscle) => {
    setSelectedMuscle(muscle);
  };

  const handleClick = () => {
    setUser(!user);
  };

  return (
    <>
      {user ? (
        <>
          <SideNavBar setUser={setUser} />
          <div className="flex">
            <Routes>
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/progress" element={<ProgressPage />} />
              <Route path="/progress/new" element={<EntriesPage />} />
              <Route path="/favourites" element={<FavouritesPage />} />
              <Route
                path="/roulette"
                element={
                  <RoulettePage
                    selectedMuscle={selectedMuscle}
                    onMuscleChange={handleMuscleChange}
                  />
                }
              />
              <Route path="/community" element={<CommunityPage />} />
            </Routes>
          </div>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
      <div className="fixed right-0 bottom-0">
        <button className="bg-jade-300" onClick={handleClick}>
          Tmp button to toggle setUser state
        </button>
      </div>
    </>
  );
}
