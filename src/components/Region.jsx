export default function({ name, count, total }) {
  return (
    <div className="Region">
      <h1>{name}</h1>
      <span>{count} / {total}</span>
    </div>
  )
}
