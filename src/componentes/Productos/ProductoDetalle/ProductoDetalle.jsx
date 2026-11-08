import { useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';

import styles from "./ProductoDetalle.module.css"

function ProductoDetalle() {

  const {id} = useParams();
  const [productos, setProductos] = useState([]);
  const [error, setError] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    fetch('/data/productos.json')
    .then((respuesta) => {
      if (!respuesta.ok) {
        throw new Error('No se pudo cargar la información de los productos')
      }
      return respuesta.json();
      })

    .then((datos) => {
      setProductos(datos)
    })

    .catch((error) => {
      setError(error.message)
    })

    .finally(() => {
      setCargando(false)
    });
  }, []);
  
  if (cargando) {
    return <p>Cargando productos, por favor espere...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const productoId = productos.find((producto) => producto.id === id);
  if (productoId == null) {
    return <p>No existe detalle del producto</p>
  }
  

  return (
		<div className={styles.container} >
      <article className={styles.card} >
        <img className={styles.image}  src={productoId.imagen} alt={productoId.nombre} />
        <h3 className={styles.name} >{productoId.nombre}</h3>
        <p className={styles.price}>${productoId.precio}</p>
        <p className={styles.stock}>Stock: {productoId.stock}</p>
        <Link to={`/productos/`}>Regresar</Link>
      </article>
    </div>
	);
}

export default ProductoDetalle