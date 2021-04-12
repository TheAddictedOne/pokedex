export default function Region({ name, count, total, onClick }) {
  return (
    <div tabindex="1" className="Region" onClick={onClick}>
      <h1>{name}</h1>
      <span>{count} / {total}</span>
    </div>
  )
}
