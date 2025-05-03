import { Views } from "../../pages/types"
import './style.css'

interface Props {
  title: string
  updateViewFunc: (view: Views) => void
}

export default function Header ({ title, updateViewFunc }: Props) {
  const isViewValue = (value: string): boolean => {
    return Object.values(Views).includes(value as Views)
  }

  const ViewsKeys = Object.keys(Views) as Views[]

  const handleClick = (newView: string) => {
    if (isViewValue(newView)) {
      updateViewFunc(newView as Views)
    }
  }

  return (
    <header>
      <h1>{title}</h1>

      <nav>
        <ul>
          {
            ViewsKeys.map(v => (
              <li key={v} onClick={() => handleClick(Views[v])}>
                {v}
              </li>
            ))
          }
        </ul>
      </nav>
    </header>
  )
}