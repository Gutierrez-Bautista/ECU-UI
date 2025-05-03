import { FormEventHandler, useContext, useRef } from "react"
import { DataContext } from "../context/dataContext"

export default function IndexPage () {
  const { setNewUrl } = useContext(DataContext)
  const urlForm = useRef<null | HTMLInputElement>(null)

  const handleSubmit: FormEventHandler = (evt) => {
    evt.preventDefault()

    if (!urlForm.current) {
      return
    }

    setNewUrl(urlForm.current.value)
  }

  return (
    <>
    <h1>ECU</h1>
    <p>Motor sin Inyección Eléctrica</p>

    <form action="" onSubmit={handleSubmit}>
      <label htmlFor="url-input">Ingrese URL para obtener los datos</label>
      <input id='url-input' type='url' placeholder='Ej: http://localhost:1234' ref={urlForm} />
      <button type="submit">Siguiente</button>
    </form>
    </>
  )
}