import styles from "./ListadoProductos.module.css";

function ListadoProductos({ productos, onEditar, onEliminar }) {

  if (productos.length === 0) {
    return <p>No hay productos cargados.</p>;
  }

  return (
    <table className={styles.tabla}>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Detalle</th>
          <th>Precio</th>
          <th>Stock</th>
          <th>Destacado</th>
          <th>Acciones</th>
        </tr>
      </thead>

      <tbody>
        {productos.map((producto) => (
          <tr key={producto.id}>
            <td>{producto.nombre}</td>
            {/* <td>{producto.detalles}</td> */}
            <td>
              {producto.detalle.length > 50
                ? producto.detalle.substring(0, 50) + "..."
                : producto.detalle}
            </td>
            <td>${producto.precio}</td>
            <td>{producto.stock}</td>
            <td>{producto.destacado ? "Sí" : "No"}</td>

            <td className={styles.acciones}>
              <button
                type="button"
                onClick={() => onEditar(producto)}
              >
                Editar
              </button>

              <button
                type="button"
                onClick={() => onEliminar(producto.id)}
              >
                Eliminar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ListadoProductos;