import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { useCart } from "../../context/CartContext";

function Header() {

	const {getCartQuantity} = useCart();
	const totalProductos = getCartQuantity();
	
	return <header className={styles.header}>
		<h1 className={styles.titulo} >Souvenir Mall</h1>

		<nav className={styles.navbar}>
			<Link to="/">Inicio</Link>
      <Link to="/productos">Productos</Link>
      <Link to="/nosotros">Contacto</Link>
			<Link to="/nuevo">Nuevo Producto</Link>
			<Link to="/carrito">Carrito {totalProductos > 0 && <span>{totalProductos}</span> } </Link>
    </nav>;
		
		</header>
}

export default Header;