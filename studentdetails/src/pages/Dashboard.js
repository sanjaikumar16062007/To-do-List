import { Link, Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="center">
      <h2>Dashboard</h2>

      <div className="dash">
        <Link to="profile" className="btn">Profile</Link>
        <Link to="settings" className="btn">Settings</Link>
      </div>

      <Outlet />
    </div>
  );
}