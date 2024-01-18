import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <ul>
      <NavLink>Dashboard</NavLink>
      <NavLink>Progress</NavLink>
      <NavLink>Recommendations</NavLink>
      <NavLink>Community</NavLink>
    </ul>
  );
}
