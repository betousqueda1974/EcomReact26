function FormularioProducto({datosForm, manejarCambioIngreso, manejarEnvio, manejarCambioImagen}) {

  return (
    <form onSubmit={manejarEnvio}>
      <h3>Agregar Nuevo Producto</h3>
      <div>
        <label>Id:</label>
        <input
          type="number"
          name="id"
          placeholder="2"
          onChange={manejarCambioIngreso}
          />
      </div>

      <div>
        <label htmlFor="nombre">Nombre del Producto:</label>
        <input
          type="text"
          name="nombre"
          placeholder="Ej: Souvenir10"
          onChange={manejarCambioIngreso}
          />
      </div>
      
      <div>
        <label>Precio:</label>
        <input
          type="number"
          name="precio"
          placeholder="Ej: 95"
          onChange={manejarCambioIngreso}
        />
      </div>
      
      <div>
        <label>Stock:</label>
        <input
          type="number"
          name="stock"
          placeholder="Ej: 5"
          onChange={manejarCambioIngreso}
        />
      </div>
      
      <div>
        <label>Imagen:</label>
        <input
          type="file"
          name="image"
          onChange={manejarCambioImagen}
        />
      </div>
      
      <button type="submit">Guardar Producto</button>
    </form>
  );
}
export default FormularioProducto