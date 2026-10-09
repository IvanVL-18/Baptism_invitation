import { invitacion } from '../config'
import { Concha, CruzRadiante } from './Ornamentos'

export default function Hero() {
  const { nombre, apellidos, fechaCorta, foto, resumen } = invitacion

  return (
    <header className="seccion hero">
      <div className="columna hero__contenido">
        <div className="hero__concha entrada" style={{ animationDelay: '0ms' }}>
          <Concha />
        </div>
        <p className="etiqueta entrada" style={{ animationDelay: '120ms' }}>
          Mi bautizo
        </p>
        <h1 className="hero__titulo entrada" style={{ animationDelay: '240ms' }}>
          <span className="hero__nombre">{nombre}</span>
          <span className="hero__apellidos">{apellidos}</span>
        </h1>
        <div className="hero__fecha entrada" style={{ animationDelay: '360ms' }}>
          <span className="hero__fecha-linea" aria-hidden="true" />
          <span>{fechaCorta}</span>
          <span className="hero__fecha-linea" aria-hidden="true" />
        </div>
        <div className="arco entrada" style={{ animationDelay: '480ms' }}>
          <div className="arco__interior">
            {foto ? (
              <img
                src={`${import.meta.env.BASE_URL}${foto}`}
                alt={`${nombre} ${apellidos}`}
                width={240}
                height={310}
              />
            ) : (
              <CruzRadiante />
            )}
          </div>
        </div>
        <div className="hero__resumen entrada" style={{ animationDelay: '600ms' }}>
          <p className="hero__hora">{resumen.hora}</p>
          <p className="hero__lugar">{resumen.lugar}</p>
        </div>
      </div>
    </header>
  )
}
