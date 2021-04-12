export default function Region({ name, count, total, onClick }) {
  return (
    <div className="Region" onClick={onClick}>
      <h1>{name}</h1>
      <span>{count} / {total}</span>
    </div>
  )
}
