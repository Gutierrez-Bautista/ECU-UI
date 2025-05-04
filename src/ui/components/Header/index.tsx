import { Views } from "../../types/main"
import './style.css'

interface Props {
  title: string
  updateViewFunc: (view: Views) => void
}

export default function Header ({ title, updateViewFunc }: Props) {
  const ViewsKeys = Object.keys(Views) as Array<keyof typeof Views>

  const handleClick = (newView: keyof typeof Views) => {
    updateViewFunc(Views[newView])
  }

  return (
    <header>
      <h1>{title}</h1>

      <nav>
        <ul>
          {
            ViewsKeys.map(v => {
              return (
                <li key={v} onClick={() => handleClick(v)}>
                  {v}
                </li>
              )
            })
          }
        </ul>
      </nav>
    </header>
  )
}