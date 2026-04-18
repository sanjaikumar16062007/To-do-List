import students from "../data/students";
import { Link } from "react-router-dom";

export default function Students() {
  return (
    <div className="grid">
      {students.map((s) => (
        <div className="card" key={s.id}>
          <img src={s.image} alt="" />
          <h3>{s.name}</h3>
          <p>{s.course}</p>

          <Link to={`/students/${s.id}`} className="btn">
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
}