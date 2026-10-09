import { invitacion } from '../config'
import { Divisor, IconoCalendario } from './Ornamentos'
import Reveal from './Reveal'

/** 2026-10-24T18:00:00.000Z -> 20261024T180000Z (formato de Google Calendar). */
const compacta = (d: Date) => d.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '')

function urlGoogleCalendar() {
  const { calendario, fechaISO, duracionMin } = invitacion
  const inicio = new Date(fechaISO)
  const fin = new Date(inicio.getTime() + duracionMin * 60_000)
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: calendario.titulo,
    dates: `${compacta(inicio)}/${compacta(fin)}`,
    location: calendario.lugar,
    details: calendario.detalles,
  })
  return `https://calendar.google.com/calendar/render?${params}`
}

export default function Cierre() {
  const { fechaLarga, cierre, calendario } = invitacion

  return (
    <footer className="seccion seccion--noche cierre">
      <Reveal className="columna cierre__contenido">
        <p className="etiqueta etiqueta--dorada">Guarda la fecha</p>
        <h2 className="titulo titulo--claro">{fechaLarga}</h2>
        <p className="texto texto--claro">{cierre.texto}</p>
        <div className="cierre__acciones">
          <a className="boton boton--claro" href={urlGoogleCalendar()} target="_blank" rel="noopener noreferrer">
            <IconoCalendario />
            <span>Agregar al calendario</span>
          </a>
          <a className="enlace-claro" href={`${import.meta.env.BASE_URL}${calendario.archivoICS}`} download>
            Usar Apple Calendar u Outlook
          </a>
        </div>
      </Reveal>
      <Reveal className="columna cierre__despedida">
        <Divisor />
        <p className="cierre__esperamos">{cierre.despedida}</p>
        <p className="cierre__familia">{cierre.familia}</p>
      </Reveal>
    </footer>
  )
}
