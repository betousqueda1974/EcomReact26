import styles from "./FormularioCupon.module.css";

function FormularioCupon({
  datosForm,
  manejarCambio,
  manejarEnvio
}) {
  return (
    <form onSubmit={manejarEnvio} className={styles.formulario} >

      <h3>Agregar nuevo cupón</h3>

      <div>
        <label htmlFor="id">ID:</label>
        <input
          id="id"
          type="text"
          name="id"
          value={datosForm.id}
          onChange={manejarCambio}
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
        <label htmlFor="descuento">Descuento:</label>
        <input
          id="descuento"
          type="number"
          name="descuento"
          value={datosForm.descuento}
          onChange={manejarCambio}
          min="1"
          max="100"
          required
        />
      </div>

      <div className={styles.checkboxContainer}>
        <label htmlFor="habilitado">Habilitado</label>
        <input
          id="habilitado"
          type="checkbox"
          name="habilitado"
          checked={datosForm.habilitado}
          onChange={manejarCambio}
        />
      </div>

      <button type="submit">Guardar cupón</button>

    </form>
  );
}

export default FormularioCupon;