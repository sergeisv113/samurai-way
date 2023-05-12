import s from './Separator.module.css'

type PropsType = {
  title: string
}
export const Separator = ({title}: PropsType) => {
  return (
    <div className={s.separator}>
      <div>{title}</div>
    </div>
  )
}