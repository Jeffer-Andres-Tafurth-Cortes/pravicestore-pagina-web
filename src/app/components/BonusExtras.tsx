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
import { useCart } from "../context/CartContext";

export default function BonusExtras() {
  const { addToCart } = useCart();

  const extraService = {
    id: 99,
    name: "Asesoría legal personalizada (1 hora)",
    price: 350000,
    image: "/extras/asesoria.png",
    quantity: 1,
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>
        <FontAwesomeIcon icon={faGift} /> Bonus y Extras Incluidos
      </h2>

      <div className={styles.subtitle}>
        Todos los packs incluyen manual práctico + descarga inmediata. Además,
        asesoría gratuita incluida según el plan que elijas.
      </div>

      {/* TARJETAS */}
      <div className={styles.cards}>
        <div className={styles.card}>
          <FontAwesomeIcon icon={faDownload} className={styles.icon} />
          <h3>Descarga inmediata</h3>
          <p>Acceso instantáneo después del pago confirmado.</p>
        </div>

        <div className={styles.card}>
          <FontAwesomeIcon icon={faBook} className={styles.icon} />
          <h3>Manual práctico</h3>
          <p>Guía paso a paso para implementar todo correctamente.</p>
        </div>

        <div className={styles.card}>
          <FontAwesomeIcon icon={faHeadset} className={styles.icon} />
          <h3>Asesoría incluida</h3>
          <p>Soporte experto según tu plan elegido.</p>
        </div>
      </div>

      {/* BLOQUE EXTRA */}
      <div className={styles.extraBox}>
        <h3>Extra opcional</h3>
        <p>
          <FontAwesomeIcon icon={faPlus} /> Añade 1 hora de asesoría
          personalizada con nuestro abogado experto en Reforma Laboral.
        </p>

        <button
          className={styles.extraButton}
          onClick={() => addToCart(extraService)}
        >
          <FontAwesomeIcon icon={faPlus} /> Añadir asesoría extra
          <span>(+ $350.000)</span>
        </button>
      </div>
    </section>
  );
}
