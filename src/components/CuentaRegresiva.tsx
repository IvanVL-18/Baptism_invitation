import { useEffect, useState } from 'react'
import { invitacion } from '../config'
import Reveal from './Reveal'

const meta = new Date(invitacion.fechaISO).getTime()

function segundosRestantes() {
  return Math.max(0, Math.floor((meta - Date.now()) / 1000))
}

const dos = (n: number) => String(n).padStart(2, '0')

export default function CuentaRegresiva() {
  const [s, setS] = useState(segundosRestantes)

  useEffect(() => {
    const id = window.setInterval(() => setS(segundosRestantes()), 1000)
    return () => window.clearInterval(id)
  }, [])

  // Cuando llega la hora, la sección cambia de mensaje en vez de quedarse en ceros.
  if (s === 0) {
    return (
      <section className="seccion">
        <div className="columna cuenta">
          <p className="cuenta__hoy">¡Llegó el gran día!</p>
        </div>
      </section>
    )
  }

  const partes = [
    { valor: Math.floor(s / 86400), nombre: 'Días' },
    { valor: Math.floor((s % 86400) / 3600), nombre: 'Horas' },
    { valor: Math.floor((s % 3600) / 60), nombre: 'Min' },
    { valor: s % 60, nombre: 'Seg' },
  ]

  return (
    <section className="seccion">
      <Reveal className="columna cuenta">
        <h2 className="etiqueta">Faltan</h2>
        <div className="cuenta__rejilla" role="timer" aria-label="Tiempo que falta para el bautizo">
          {partes.map((p) => (
            <div className="cuenta__celda" key={p.nombre}>
              <span className="cuenta__numero">{dos(p.valor)}</span>
              <span className="cuenta__nombre">{p.nombre}</span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
