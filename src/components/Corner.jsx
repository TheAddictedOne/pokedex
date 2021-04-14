export default function Corner({ position }) {
  return (
    <div className={`anchor ${position}`}>
      <div className="Corner"></div>
      <div className="Corner large"></div>
    </div>
  )
}
