// Todos los datos de la invitación viven aquí.
// Para cambiar un texto, una hora o un lugar, edita solo este archivo.

export type Evento = {
  icono: 'iglesia' | 'comida'
  tipo: string
  titulo: string
  lugar: string
  hora: string
  /** Texto que se busca en Google Maps al tocar "Cómo llegar". */
  mapa: string
}

export const invitacion = {
  nombre: 'Álvaro',
  apellidos: 'Islas Domínguez',

  /** Fecha y hora de la misa (hora del centro de México, UTC-6). */
  fechaISO: '2026-10-24T12:00:00-06:00',
  /** Duración que se guarda en el calendario, en minutos. */
  duracionMin: 60,
  fechaCorta: '24 · Octubre · 2026',
  fechaLarga: 'Sábado 24 de octubre',

  /**
   * Foto de portada. Deja null para mostrar el arco con el ornamento.
   * Para usar una foto: guárdala en /public (por ejemplo public/alvaro.jpg,
   * vertical, de unos 800 px de ancho) y escribe aquí 'alvaro.jpg'.
   */
  foto: null as string | null,

  resumen: {
    hora: 'Misa a las 12:00 h',
    lugar: 'Iglesia de la Asunción · Pachuca, Hidalgo',
  },

  mensaje:
    'Con la bendición de Dios y el amor de mis papás, padrinos y abuelos, recibiré el sacramento del bautismo.',
  mensajeSecundario: 'Acompáñame en este día tan especial para mí y mi familia.',

  papas: ['Edgar Abel Islas Montes de Oca', 'Erika Roxeth Domínguez León'],
  padrinos: ['Saúl León Hidario', 'Rubí León Hidario'],

  eventos: [
    {
      icono: 'iglesia',
      tipo: 'Ceremonia religiosa',
      titulo: 'Iglesia de la Asunción',
      lugar: 'Pachuca, Hidalgo',
      hora: '12:00 h',
      mapa: 'Iglesia de la Asunción, Pachuca, Hidalgo',
    },
    {
      icono: 'comida',
      tipo: 'Comida',
      titulo: 'Nacionalismo #200',
      lugar: 'Jagüey de Téllez, Zempoala, Hidalgo',
      hora: 'Después de la misa',
      mapa: 'Nacionalismo 200, Jagüey de Téllez, Zempoala, Hidalgo',
    },
  ] as Evento[],

  cierre: {
    texto: 'Tu presencia hará este día aún más especial.',
    despedida: '¡Te esperamos!',
    familia: 'Familia Islas Domínguez',
  },

  calendario: {
    titulo: 'Bautizo de Álvaro',
    lugar: 'Iglesia de la Asunción, Pachuca, Hidalgo',
    detalles: 'Misa a las 12:00 h. Después, comida en Nacionalismo #200, Jagüey de Téllez, Zempoala, Hidalgo.',
    /** Archivo en /public para Apple Calendar y Outlook. */
    archivoICS: 'bautizo-alvaro.ics',
  },
}
