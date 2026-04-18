import { Link } from "react-router-dom";

export default function StudentCard({ student }) {
  return (
    <div className="card">
      <img src={student.image} alt="" />
      <h3>{student.name}</h3>
      <p>{student.course}</p>

      <Link to={`/students/${student.id}`} className="btn">
        View Details
      </Link>
    </div>
  );
}