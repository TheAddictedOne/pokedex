import { listitem } from 'styles/list.module.css'

export default function ListItem({ numero, name, status }) {
  return (
    <div className={listitem} data-numero={numero}>
      <div>{`No. ${numero}`}</div>
      <div>
        <span>{name}</span>
        <div className={status}></div>
      </div>
    </div>
  )
}
