export default function ListItem({ numero, name, status }) {
  return (
    <div className="ListItem" data-numero={numero}>
      <div>{`No. ${numero}`}</div>
      <div>
        <span>{name}</span>
        <div className={status}></div>
      </div>
    </div>
  )
}
