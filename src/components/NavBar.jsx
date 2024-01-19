import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <ul>
      <li>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </li>
      <li>
        {" "}
        <NavLink to="/progress">Progress</NavLink>
      </li>

      <li>
        {" "}
        <NavLink to="/new">Add New Exercises</NavLink>
      </li>

      <li>
        {" "}
        <NavLink to="/recommendations">Recommendations</NavLink>
      </li>

      <li>
        {" "}
        <NavLink to="/community">Community</NavLink>
      </li>
    </ul>
  );
}
