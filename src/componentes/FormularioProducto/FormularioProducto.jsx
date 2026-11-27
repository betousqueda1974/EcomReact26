import styles from "./FormularioProducto.module.css";

function FormularioProducto({
  datosForm,
  manejarCambio,
  manejarEnvio,
  modoEdicion = false,
  onCancelar
}) {
  return (
    <form onSubmit={manejarEnvio} className={styles.formulario}>

      <h3>{modoEdicion ? "Editar producto" : "Agregar nuevo producto"}</h3>

      <div>
        <label htmlFor="id">ID:</label>
        <input
            id="id"
            type="text"
            name="id"
            value={datosForm.id}
            onChange={manejarCambio}
            disabled={modoEdicion}
            required
        />
      </div>

      <div>
        <label htmlFor="nombre">Nombre:</label>
        <input
            id="nombre"
            type="text"
            name="nombre"
            value={datosForm.nombre}
            onChange={manejarCambio}
            required
        />
      </div>

      <div>
        <label htmlFor="precio">Precio:</label>
        <input
            id="precio"
            type="number"
            name="precio"
            value={datosForm.precio}
            onChange={manejarCambio}
            min="0.01"
            step="0.01"
            required
        />
      </div>

      <div>
        <label htmlFor="stock">Stock:</label>
        <input
            id="stock"
            type="number"
            name="stock"
            value={datosForm.stock}
            onChange={manejarCambio}
            min="0"
            step="1"
            required
        />
      </div>

      <div>
        <label htmlFor="imagen">Imagen (URL):</label>
        <input
            id="imagen"
            type="url"
            name="imagen"
            value={datosForm.imagen}
            onChange={manejarCambio}
        />
      </div>

      <div>
        <label htmlFor="detalle">Detalles:</label>
        <textarea
            id="detalle"
            name="detalle"
            value={datosForm.detalle}
            onChange={manejarCambio}
        />
      </div>

      <div className={styles.checkboxContainer}>
        <label htmlFor="destacado">Destacado</label>
        <input
          id="destacado"
          type="checkbox"
          name="destacado"
          checked={datosForm.destacado}
          onChange={manejarCambio}
        />
      </div>

      <button type="submit">
        {modoEdicion ? "Actualizar producto" : "Guardar producto"}
      </button>

      {modoEdicion && (
        <button type="button" onClick={onCancelar}>Cancelar edición</button>
      )}

    </form>
  );
}

export default FormularioProducto;