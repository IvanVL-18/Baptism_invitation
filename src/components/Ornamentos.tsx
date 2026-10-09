// Ornamentos e iconos dibujados en SVG: se ven nítidos en cualquier pantalla
// y no pesan nada. Todos son decorativos (aria-hidden).

const trazo = {
  fill: 'none',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
} as const

export function Concha({ size = 64 }: { size?: number }) {
  return (
    <svg width={size} height={(size * 56) / 64} viewBox="0 0 64 56" stroke="currentColor" strokeWidth="1.2" aria-hidden="true" {...trazo}>
      <path d="M6 34 A26 26 0 0 1 58 34 L38 50 H26 Z" />
      <path d="M32 50 L12 20 M32 50 L22 11 M32 50 L32 8 M32 50 L42 11 M32 50 L52 20" />
    </svg>
  )
}

export function Cruz({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={(size * 36) / 28} viewBox="0 0 28 36" stroke="currentColor" strokeWidth="1.2" aria-hidden="true" {...trazo}>
      <path d="M14 2 V34 M5 12 H23" />
    </svg>
  )
}

/** Cruz con destellos, para el arco de la portada cuando no hay foto. */
export function CruzRadiante() {
  const rayos = Array.from({ length: 16 }, (_, i) => {
    const a = (i * Math.PI) / 8
    const r1 = i % 2 === 0 ? 46 : 52
    const r2 = i % 2 === 0 ? 74 : 62
    return `M${(80 + r1 * Math.cos(a)).toFixed(1)} ${(80 + r1 * Math.sin(a)).toFixed(1)} L${(80 + r2 * Math.cos(a)).toFixed(1)} ${(80 + r2 * Math.sin(a)).toFixed(1)}`
  }).join(' ')
  return (
    <svg width="160" height="160" viewBox="0 0 160 160" stroke="currentColor" strokeWidth="1.2" aria-hidden="true" {...trazo}>
      <path d={rayos} opacity="0.7" />
      <path d="M80 50 V112 M62 70 H98" strokeWidth="1.6" />
    </svg>
  )
}

export function Divisor() {
  return (
    <div className="divisor" aria-hidden="true">
      <span className="divisor__linea" />
      <span className="divisor__rombo" />
      <span className="divisor__linea" />
    </div>
  )
}

export function IconoIglesia() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.2" aria-hidden="true" {...trazo}>
      <path d="M12 2v5M10 4h4M6 11l6-4 6 4v10H6zM10 21v-4a2 2 0 0 1 4 0v4" />
    </svg>
  )
}

export function IconoComida() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.2" aria-hidden="true" {...trazo}>
      <path d="M6 3v6a2 2 0 0 0 4 0V3M8 3v18M17 3c-2.4 2-2.4 7 0 9v9" />
    </svg>
  )
}

export function IconoPin() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6" aria-hidden="true" {...trazo}>
      <path d="M12 21s-6-5.5-6-10a6 6 0 0 1 12 0c0 4.5-6 10-6 10z" />
      <circle cx="12" cy="11" r="2" />
    </svg>
  )
}

export function IconoCalendario() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6" aria-hidden="true" {...trazo}>
      <rect x="4" y="5" width="16" height="15" rx="2" />
      <path d="M4 10h16M8 3v4M16 3v4" />
    </svg>
  )
}
