import { invitacion } from '../config'
import { Divisor } from './Ornamentos'
import Reveal from './Reveal'

function Grupo({ titulo, nombres }: { titulo: string; nombres: string[] }) {
  return (
    <div className="familia__grupo">
      <h2 className="etiqueta">{titulo}</h2>
      <ul className="familia__nombres">
        {nombres.map((nombre) => (
          <li key={nombre}>{nombre}</li>
        ))}
      </ul>
    </div>
  )
}

export default function Familia() {
  return (
    <section className="seccion seccion--tinte">
      <div className="columna columna--ancha familia">
        <Reveal>
          <Grupo titulo="Mis papás" nombres={invitacion.papas} />
        </Reveal>
        <div className="familia__divisor">
          <Divisor />
        </div>
        <Reveal delay={120}>
          <Grupo titulo="Mis padrinos" nombres={invitacion.padrinos} />
        </Reveal>
      </div>
    </section>
  )
}
