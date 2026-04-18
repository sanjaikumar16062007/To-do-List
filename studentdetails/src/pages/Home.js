import students from "../data/students";

export default function Home() {
  return (
    <div className="center">
      <h1>📊 Attendance Dashboard</h1>

      <div className="summary">
        <div className="card">
          <h3>Total Students</h3>
          <p>{students.length}</p>
        </div>

        <div className="card">
          <h3>Total Attendance</h3>
          <p>{students.reduce((a, s) => a + s.attendance, 0)}</p>
        </div>
      </div>
    </div>
  );
}