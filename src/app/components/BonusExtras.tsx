"use client";

import styles from "./styles/BonusExtras.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faBook,
  faHeadset,
  faPlus,
  faGift,
} from "@fortawesome/free-solid-svg-icons";

import { motion } from "framer-motion";
import { useCart } from "../context/CartContext";
import { useToast } from "../components/Toast";

export default function BonusExtras() {
  const { addToCart } = useCart();
  const { showToast } = useToast();

  const extraService = {
    id: 99,
    name: "Asesoría legal personalizada (1 hora)",
    price: 350000,
    image: "/logo_pravice.png",
    quantity: 1,
  };

  return (
    <section className={styles.section}>
      {/* TÍTULO */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className={styles.title}
      >
        <FontAwesomeIcon icon={faGift} /> Bonus y Extras Incluidos
      </motion.h2>

      {/* SUBTÍTULO */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className={styles.subtitle}
      >
        Todos los packs incluyen manual práctico + descarga inmediata. Además,
        asesoría gratuita incluida según el plan que elijas.
      </motion.div>

      {/* TARJETAS */}
      <motion.div
        className={styles.cards}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {/** CARD 1 */}
        <motion.div
          className={styles.card}
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            show: { opacity: 1, scale: 1 },
          }}
          transition={{ duration: 0.4 }}
        >
          <FontAwesomeIcon icon={faDownload} className={styles.icon} />
          <h3>Descarga inmediata</h3>
          <p>Acceso instantáneo después del pago confirmado.</p>
        </motion.div>

        {/** CARD 2 */}
        <motion.div
          className={styles.card}
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            show: { opacity: 1, scale: 1 },
          }}
          transition={{ duration: 0.4 }}
        >
          <FontAwesomeIcon icon={faBook} className={styles.icon} />
          <h3>Manual práctico</h3>
          <p>Guía paso a paso para implementar todo correctamente.</p>
        </motion.div>

        {/** CARD 3 */}
        <motion.div
          className={styles.card}
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            show: { opacity: 1, scale: 1 },
          }}
          transition={{ duration: 0.4 }}
        >
          <FontAwesomeIcon icon={faHeadset} className={styles.icon} />
          <h3>Asesoría incluida</h3>
          <p>Soporte experto según tu plan elegido.</p>
        </motion.div>
      </motion.div>

      {/* EXTRA OPCIONAL */}
      <motion.div
        className={styles.extraBox}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <h3>Extra opcional</h3>
        <p>
          <FontAwesomeIcon icon={faPlus} /> Añade 1 hora de asesoría
          personalizada con nuestro abogado experto en Reforma Laboral.
        </p>

        <button
          className={styles.extraButton}
          onClick={() => {
            addToCart(extraService);
            showToast(`✔ Asesoria agregada al carrito`);
          }}
        >
          <FontAwesomeIcon icon={faPlus} /> Añadir asesoría extra
          <span>(+ $350.000)</span>
        </button>
      </motion.div>
    </section>
  );
}
