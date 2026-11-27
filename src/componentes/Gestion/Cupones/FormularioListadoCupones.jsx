import styles from "./FormularioListadoCupones.module.css";

function ListadoCupones({cupones, onEliminar }) {

  if (cupones.length === 0) {
    return <p>No hay cupones cargados.</p>;
  }

  return (
    <table className={styles.tabla}>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Descuento</th>
          <th>Habilitado</th>
          <th>Acciones</th>
        </tr>
      </thead>

      <tbody>
        {cupones.map((cupon) => (
          <tr key={cupon.id}>
            <td>{cupon.nombre}</td>
            <td>{cupon.descuento}%</td>
            <td>{cupon.habilitado ? "Sí" : "No"}</td>

            <td className={styles.acciones}>
              <button
                type="button"
                onClick={() => onEliminar(cupon.id)}
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

export default ListadoCupones;