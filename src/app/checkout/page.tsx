"use client";

import styles from "./Checkout.module.css";
import { useCart } from "../context/CartContext";

export default function CheckoutPage() {
  const { cart } = useCart();

  const subtotal = cart.reduce(
    (total: number, item: any) => total + item.price * item.quantity,
    0
  );

  const handlePayment = () => {
    const reference = "ORDER-" + Date.now(); // ID único para cada pedido

    const publicKey = "pub_test_xxxxxxxxxx"; // <-- REEMPLAZA con tu llave pública de Wompi

    const url = `https://checkout.wompi.co/p/?public-key=${publicKey}&currency=COP&amount-in-cents=${
      subtotal * 100
    }&reference=${reference}`;

    window.location.href = url;
  };

  return (
    <div className={styles.container}>
      {/* FORMULARIO */}
      <div className={styles.formSection}>
        <h2 className={styles.title}>Detalles De Facturación</h2>

        <form className={styles.form}>
          <div className={styles.row}>
            <input className={styles.input} placeholder="Nombre *" required />
            <input
              className={styles.input}
              placeholder="Apellidos *"
              required
            />
          </div>

          <input
            className={styles.input}
            placeholder="Nombre de la empresa (opcional)"
          />

          <label className={styles.label}>País / Región</label>
          <select className={styles.select} defaultValue="Colombia">
            <option>Colombia</option>
          </select>

          <input
            className={styles.input}
            placeholder="Dirección de la calle"
            required
          />

          <input
            className={styles.input}
            placeholder="Apartamento, etc. (opcional)"
          />

          <div className={styles.row}>
            <input className={styles.input} placeholder="Ciudad" required />

            <select className={styles.select} required>
              <option value="">Departamento</option>
              <option>Antioquia</option>
              <option>Cundinamarca</option>
              <option>Valle del Cauca</option>
            </select>
          </div>

          <input
            className={styles.input}
            placeholder="Código postal (opcional)"
          />

          <input className={styles.input} placeholder="Teléfono *" required />

          <input
            className={styles.input}
            placeholder="Correo electrónico *"
            required
          />

          <h3 className={styles.subtitle}>Información Adicional</h3>

          <textarea
            className={styles.textarea}
            placeholder="Notas del pedido (opcional)"
          />
        </form>
      </div>

      {/* RESUMEN DEL PEDIDO */}
      <div className={styles.orderSection}>
        <h2 className={styles.title}>Tu Pedido</h2>

        <table className={styles.summary}>
          <thead className={styles.thead}>
            <tr className={styles.tr}>
              <th className={styles.th}>Producto</th>
              <th className={styles.th}>Subtotal</th>
            </tr>
          </thead>

          <tbody className={styles.tbody}>
            {cart.map((item: any) => (
              <tr key={item.id} className={styles.tr}>
                <td className={styles.td}>
                  {item.name} × {item.quantity}
                </td>
                <td className={styles.td}>
                  ${(item.price * item.quantity).toLocaleString()}
                </td>
              </tr>
            ))}

            <tr className={`${styles.tr} ${styles.totalRow}`}>
              <td className={styles.totalLabel}>Total</td>
              <td className={styles.totalValue}>
                ${subtotal.toLocaleString()}
              </td>
            </tr>
          </tbody>
        </table>

        <img
          src="/Wompi_LogoPrincipal-2.png"
          className={styles.gatewayLogo}
          alt="Wompi"
        />

        <p className={styles.privacy}>
          Tus datos personales se utilizarán para procesar tu pedido, mejorar tu
          experiencia en esta web y otros propósitos descritos en la política de
          privacidad.
        </p>

        <div className={styles.checkbox}>
          <input type="checkbox" className={styles.checkboxInput} required />
          <label className={styles.checkboxLabel}>
            He leído y estoy de acuerdo con los términos y condiciones *
          </label>
        </div>

        <button className={styles.payBtn} onClick={handlePayment}>
          REALIZAR EL PEDIDO
        </button>
      </div>
    </div>
  );
}
