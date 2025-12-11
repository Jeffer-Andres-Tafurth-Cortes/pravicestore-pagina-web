"use client";

import styles from "./styles/Hero.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useCart } from "../context/CartContext";
import { motion } from "framer-motion";

export default function Hero() {
  const { cart } = useCart();
  const itemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const scrollToPacks = () => {
    const section = document.getElementById("packs");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className={styles.hero}>
      {/* VIDEO DE FONDO */}
      <video autoPlay loop muted playsInline className={styles.videoBg}>
        <source src="/video-reforma-laboral.mp4" type="video/mp4" />
      </video>

      {/* CAPA OSCURA */}
      <div className={styles.overlay}></div>

      {/* LOGO FIXED */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        <Link href="/" className={styles.logoFixed}>
          <img src="/logo_pravice.png" alt="logo" />
        </Link>
      </motion.div>

      {/* BADGE */}
      <motion.div
        className={styles.badge}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        REFORMA LABORAL 2025
      </motion.div>

      {/* ICONO CARRITO */}
      <motion.div
        initial={{ opacity: 0, x: 25 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Link href="/cart" className={styles.cartIcon}>
          <FontAwesomeIcon icon={faShoppingCart} />
          {itemsCount > 0 && (
            <span className={styles.badgeCount}>{itemsCount}</span>
          )}
        </Link>
      </motion.div>

      {/* CONTENIDO */}
      <div className={styles.content}>
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Cumple La Reforma Laboral 2025 Sin Riesgos Ni Sanciones
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
        >
          Descarga tu pack jurídico, implementa paso a paso y protege tu
          empresa.
        </motion.p>

        <motion.button
          className={styles.cta}
          onClick={scrollToPacks}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.96 }}
        >
          Comprar Ahora
        </motion.button>
      </div>
    </section>
  );
}
