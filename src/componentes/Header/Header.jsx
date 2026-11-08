//import "./Header.module.css";
import { Link } from "react-router-dom";

import styles from "./Header.module.css";

function Header() {
	
	return <header className={styles.header}>
		<h1 className={styles.titulo} >Souvenir Mall</h1>

		<nav className={styles.navbar}>
			<Link to="/">Inicio</Link>
      <Link to="/productos">Productos</Link>
      <Link to="/nosotros">Contacto</Link>
			<Link to="/nuevo">Nuevo Producto</Link>
			<a href="#">Carrito</a>
    </nav>;
		
		</header>
}

export default Header;