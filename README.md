# Invitación · Bautizo de Álvaro

Invitación virtual para el bautizo de Álvaro Islas Domínguez (sábado 24 de octubre de 2026).
Sitio estático hecho con Vite + React + TypeScript, diseñado primero para celular.

## Correr en tu computadora

```bash
npm install
npm run dev      # abre http://localhost:5173
npm run build    # genera la carpeta dist/
npm run preview  # sirve dist/ para revisarla
```

Requiere Node 20 o superior.

## Cambiar datos

Todo el contenido está en **`src/config.ts`**: nombres, fecha, horas, lugares, mensaje y textos del cierre.

- **Fecha u hora de la misa:** cambia `fechaISO` (mueve la cuenta regresiva y el evento de Google Calendar), `fechaCorta` y `fechaLarga`. Actualiza también `DTSTART` / `DTEND` en `public/bautizo-alvaro.ics` (van en hora UTC: 12:00 de México = 18:00Z) y los textos de `index.html`.
- **Hora de la comida:** el campo `hora` del segundo evento (hoy dice "Después de la misa").
- **Foto de portada:** guarda la foto en `public/` (vertical, ~800 px de ancho, JPG o WebP de menos de 200 KB) y pon su nombre en `foto`, por ejemplo `foto: 'alvaro.jpg'`. Con `foto: null` el arco muestra la cruz.
- **Colores y tipografía:** variables al inicio de `src/styles.css`.

## Imagen al compartir el link (WhatsApp)

`public/og.jpg` es la imagen que aparece en la vista previa. Su plantilla está en `scripts/og.html`; si cambian los datos, edítala, ábrela en el navegador y guarda una captura de 1200 × 630 px como `public/og.jpg`.

WhatsApp guarda la vista previa en caché: si ya compartiste el link y luego cambias la imagen, puede tardar en actualizarse.

## Publicar en GitHub Pages

1. Crea un repositorio vacío en GitHub (por ejemplo `bautizo-alvaro`).
2. Sube el proyecto:

   ```bash
   git init -b main
   git add .
   git commit -m "Invitación bautizo de Álvaro"
   git remote add origin https://github.com/TU-USUARIO/bautizo-alvaro.git
   git push -u origin main
   ```

3. En el repositorio: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. El workflow `.github/workflows/deploy.yml` compila y publica en cada push a `main`. La URL queda como `https://TU-USUARIO.github.io/bautizo-alvaro/`.

Si el primer push corrió antes de activar Pages, vuelve a lanzar el workflow desde la pestaña **Actions**.

### Vercel o Netlify

También funciona sin cambios: comando `npm run build`, carpeta de salida `dist`. En ese caso define la variable `VITE_SITE_URL` con la URL pública (sin diagonal final) para que la vista previa de WhatsApp encuentre la imagen.

## Estructura

```
src/
  config.ts          datos de la invitación
  styles.css         estilos (móvil primero)
  App.tsx            orden de las secciones
  components/        Hero, Mensaje, Familia, CuentaRegresiva, Eventos, Cierre
public/
  og.jpg             imagen para compartir
  bautizo-alvaro.ics evento para Apple Calendar / Outlook
  favicon.svg
```
