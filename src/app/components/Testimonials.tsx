import styles from "./styles/Testimonials.module.css";

export default function Testimonials() {
  const testimonials = [
    {
      stars: 5,
      text: "Lo implementamos en 3 días gracias al Pack Esencial. Los documentos están perfectamente estructurados y el manual es muy claro.",
      name: "María González",
      role: "Gerente General",
      company: "PYME Industrial",
    },
    {
      stars: 5,
      text: "El Full Premium nos salvó en una visita del Ministerio. La asesoría incluida fue fundamental para resolver todas nuestras dudas.",
      name: "Carlos Ramírez",
      role: "Director de RRHH",
      company: "Empresa del Sector de Servicios",
    },
    {
      stars: 5,
      text: "Excelente inversión. Los contratos actualizados nos dieron la tranquilidad que necesitábamos ante la nueva reforma.",
      name: "Ana Patricia Soto",
      role: "CEO",
      company: "Comercializadora Nacional",
    },
  ];

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Lo Que Dicen Nuestros Clientes</h2>
      <p className={styles.subtitle}>Más de 500 empresas ya están protegidas</p>

      <div className={styles.grid}>
        {testimonials.map((t, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.stars}>{"★".repeat(t.stars)}</div>

            <p className={styles.text}>{t.text}</p>

            <div className={styles.footer}>
              <p className={styles.name}>{t.name}</p>
              <p className={styles.role}>{t.role}</p>
              <p className={styles.company}>{t.company}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
