import { invitacion } from '../config'
import { IconoComida, IconoIglesia, IconoPin } from './Ornamentos'
import Reveal from './Reveal'

const urlMapa = (busqueda: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(busqueda)}`

export default function Eventos() {
  return (
    <section className="seccion seccion--papel">
      <div className="columna columna--ancha eventos">
        <Reveal className="eventos__encabezado">
          <p className="etiqueta">Dónde y cuándo</p>
          <h2 className="titulo">El gran día</h2>
        </Reveal>
        <div className="eventos__rejilla">
          {invitacion.eventos.map((evento, i) => (
            <Reveal key={evento.tipo} delay={i * 120} className="eventos__item">
              <article className="tarjeta">
                <span className="tarjeta__icono">
                  {evento.icono === 'iglesia' ? <IconoIglesia /> : <IconoComida />}
                </span>
                <p className="tarjeta__tipo">{evento.tipo}</p>
                <h3 className="tarjeta__titulo">{evento.titulo}</h3>
                <p className="texto">{evento.lugar}</p>
                <p className="tarjeta__hora">{evento.hora}</p>
                <a
                  className="boton boton--acento"
                  href={urlMapa(evento.mapa)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Cómo llegar a ${evento.titulo}`}
                >
                  <IconoPin />
                  <span>Cómo llegar</span>
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
