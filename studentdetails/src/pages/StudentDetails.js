import { useParams, useNavigate } from "react-router-dom";
import students from "../data/students";

export default function StudentDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const s = students.find((x) => x.id === Number(id));

  if (!s) {
    return <h2 style={{ color: "white" }}>Student Not Found</h2>;
  }

  return (
    <div className="center">
      <img src={s.image} alt="" />
      <h2>{s.name}</h2>
      <p>ID: {s.id}</p>
      <p>{s.course}</p>
      <p>Attendance: {s.attendance}/{s.totalDays}</p>
      <p>Father: {s.father}</p>
      <p>Mother: {s.mother}</p>

      <button onClick={() => navigate(-1)} className="btn">Back</button>
    </div>
  );
}