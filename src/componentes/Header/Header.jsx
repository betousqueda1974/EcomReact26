//import "./Header.module.css";

import styles from "./Header.module.css";

function Header() {
	
	return <header className={styles.header}>
		<h1 className={styles.titulo} >Souvenir Mall</h1>

		<nav className={styles.navbar}>
      <a href="#">Inicio</a>
      <a href="#">Productos</a>
      <a href="#">Contacto</a>
			<a href="#">Carrito</a>
    </nav>;
		
		</header>
}

export default Header;