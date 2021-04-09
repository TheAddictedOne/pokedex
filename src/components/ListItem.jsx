export default function({ numero, name }) {
  return (
    <div className="ListItem">
      <div>{`No. ${numero}`}</div>
      <div>
        <span>{name}</span>
        <div></div>
      </div>
    </div>
  )
}
