import { invitacion } from '../config'
import { Cruz } from './Ornamentos'
import Reveal from './Reveal'

export default function Mensaje() {
  return (
    <section className="seccion seccion--papel">
      <Reveal className="columna mensaje">
        <span className="ornamento">
          <Cruz />
        </span>
        <p className="mensaje__principal">{invitacion.mensaje}</p>
        <p className="texto">{invitacion.mensajeSecundario}</p>
      </Reveal>
    </section>
  )
}
