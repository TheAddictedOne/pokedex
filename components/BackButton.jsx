import { backbutton } from 'styles/backbutton.module.css'

export default function BackButton({ onClick }) {
  return (
    <div className={backbutton} onClick={onClick}>Back</div>
  )
}
