import { TarjetaEquipoContainer } from "../Equipo/TarjetaEquipoContainer/TarjetaEquipoContainer";
import styles from "./Footer.module.css";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className={styles.footer}>
      <TarjetaEquipoContainer/>
      <div className={styles.social}>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </div>
      <p>Todos los derechos reservados @2026</p>
    </footer>
  );
}

export default Footer;