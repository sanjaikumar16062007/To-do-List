import students from "../data/students";

export default function Profile() {
  return (
    <div className="grid">
      {students.map((s) => (
        <div className="card" key={s.id}>
          <img src={s.image} alt="" />
          <h3>{s.name}</h3>
        </div>
      ))}
    </div>
  );
}