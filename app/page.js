export default function Home() {
  return (
    <main className="home">
      <section className="card">
        <p className="eyebrow">Nuestro sitio</p>
        <h1>La web de nuestra boda empieza aquí</h1>
        <p className="lead">
          Esta portada es solo el punto de partida. Más adelante podremos añadir
          historia, fecha, ubicación, RSVP, galería, regalos e información para invitados.
        </p>

        <div className="actions">
          <a className="primary" href="/love">Ver nuestro contador</a>
        </div>

        <p className="note">
          La ruta <strong>/love</strong> conserva tu página original mientras construimos
          el resto del sitio con Next.js.
        </p>
      </section>
    </main>
  );
}
