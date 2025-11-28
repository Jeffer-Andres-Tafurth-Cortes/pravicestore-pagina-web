"use client";

import styles from "./styles/Hero.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function Hero() {
  const { cart } = useCart();
  const itemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <section
      className={styles.hero}
      style={{ backgroundImage: "url('/hero-bg.jpg')" }}
    >
      <div className={styles.overlay}></div>

      {/* LOGO FIXED */}
      <Link href="/" className={styles.logoFixed}>
        <img src="/logo_pravice.png" alt="logo" />
      </Link>

      {/* BADGE */}
      <div className={styles.badge}>REFORMA LABORAL 2025</div>

      {/* ICONO CARRITO */}
      <Link href="/cart" className={styles.cartIcon}>
        <FontAwesomeIcon icon={faShoppingCart} />
        {itemsCount > 0 && (
          <span className={styles.badgeCount}>{itemsCount}</span>
        )}
      </Link>

      <div className={styles.content}>
        <h1>Cumple La Reforma Laboral 2025 Sin Riesgos Ni Sanciones</h1>
        <p>
          Descarga tu pack jurídico, implementa paso a paso y protege tu
          empresa.
        </p>
        <button className={styles.cta}>Comprar Ahora</button>
      </div>
    </section>
  );
}
