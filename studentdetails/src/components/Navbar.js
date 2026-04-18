import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="sidebar">
      <NavLink to="/">🏠</NavLink>
      <NavLink to="/students">👨‍🎓</NavLink>
      <NavLink to="/dashboard">📊</NavLink>
    </div>
  );
}