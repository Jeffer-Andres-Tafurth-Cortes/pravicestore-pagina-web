import BonusExtras from "./components/BonusExtras";
import FAQ from "./components/FAQ";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Packs from "./components/Packs";
import Testimonials from "./components/Testimonials";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Hero />
        <Intro />
        <Packs />
        <BonusExtras />
        <Testimonials />
        <FAQ />
      </main>
    </div>
  );
}
