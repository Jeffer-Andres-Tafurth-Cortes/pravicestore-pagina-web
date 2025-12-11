"use client";

import styles from "./styles/Testimonials.module.css";
import { motion } from "framer-motion";

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
      {/* Title */}
      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65 }}
        viewport={{ once: true }}
      >
        Lo Que Dicen Nuestros Clientes
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        className={styles.subtitle}
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.15 }}
        viewport={{ once: true }}
      >
        Más de 500 empresas ya están protegidas
      </motion.p>

      {/* Cards */}
      <div className={styles.grid}>
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            className={styles.card}
            initial={{ opacity: 0, scale: 0.9, y: 25 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
            }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
          >
            <div className={styles.stars}>{"★".repeat(t.stars)}</div>

            <p className={styles.text}>{t.text}</p>

            <div className={styles.footer}>
              <p className={styles.name}>{t.name}</p>
              <p className={styles.role}>{t.role}</p>
              <p className={styles.company}>{t.company}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
