import { useEffect, useState } from "react";
import { readProductos, crearProducto, actualizarProducto, eliminarProducto } from "../../services/productosServices";
import ListadoProductos from "../ListadoProductos/ListadoProductos";
import FormularioProducto from "../FormularioProducto/FormularioProducto";
// import styles from "./Gestion.module.css";

const estadoInicialForm = {
    id: "",
    nombre: "",
    precio: "",
    stock: "",
    imagen: "",
    detalle: "",
    destacado: false
};

function Gestion() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const [datosForm, setDatosForm] = useState(estadoInicialForm);
  const [productoAEditar, setProductoAEditar]= useState(null);

  useEffect(() => {
    const cargarProductos = async () => {
      try {
        const datos = await readProductos();
        setProductos(datos);
      } catch (error) {
        setError(error.message);
      } finally {
        setCargando(false);
      }
    };
    cargarProductos();
  }, []);

  if (cargando) {
    return <p>Cargando productos...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const manejarCambio = (evento) => {
    const { name, value, type, checked } = evento.target;

    setDatosForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };


  const manejarEditar = (producto) => {
    setProductoAEditar({ ...producto });
    setDatosForm({ ...producto });
  };


  const cancelarEdicion = () => {
    setProductoAEditar(null);
    setDatosForm(estadoInicialForm);
  };


  const manejarEliminar = async (id) => {

    const confirmar = window.confirm(
    "¿Desea eliminar este producto? Esta acción no se puede deshacer.");

    if (!confirmar) {
      return;
    }

    try {
      await eliminarProducto(id);

      setProductos((prev) => prev.filter((prod) => prod.id !== id));

      //Hace falta esta validación?
      if (productoAEditar?.id === id) {
        setProductoAEditar(null);
      }

      alert("Producto eliminado correctamente.");

    } catch (error) {
      console.error(error);
      alert("No se pudo eliminar el producto.");
    }
  };


  const manejarEnvio = async (evento) => {
    evento.preventDefault();

    const producto = {
      id: datosForm.id.trim(),
      nombre: datosForm.nombre.trim(),
      precio: Number(datosForm.precio),
      stock: Number(datosForm.stock),
      imagen: datosForm.imagen.trim(),
      detalle: datosForm.detalle.trim(),
      destacado: datosForm.destacado,
    };

    if (
      !producto.id ||
      !producto.nombre ||
      producto.precio <= 0 ||
      !Number.isFinite(producto.precio) ||
      producto.precio <= 0 ||
      producto.stock < 0 ||
      !Number.isInteger(producto.stock) ||
      producto.stock < 0
    ) {
      alert("Verifique los datos ingresados.");
      return;
    }

    try {

      if (productoAEditar) {

        const actualizado = await actualizarProducto(producto);

        setProductos((prev) => prev.map((prod) =>
          prod.id === actualizado.id ? actualizado : prod
          )
        );

        setProductoAEditar(null);

        alert("Producto actualizado correctamente.");

      } else {

        const creado = await crearProducto(producto);

        if (!creado) {
          alert("Ya existe un producto con ese ID.");
          return;
        }

        setProductos((prev) => [...prev, creado]);

        alert("Producto creado correctamente.");
    }

    setDatosForm(estadoInicialForm);

    } catch (error) {
      console.error(error);
      alert("No se pudo crear el producto.");
    }
  };

  const modoEdicion = Boolean(productoAEditar);

  return (
    // <div className={styles.container}>
    <div>

      <FormularioProducto
        datosForm={datosForm}
        manejarCambio={manejarCambio}
        manejarEnvio={manejarEnvio}
        modoEdicion={modoEdicion}
        onCancelar={cancelarEdicion}
      />

      <ListadoProductos
        productos={productos}
        onEditar={manejarEditar}
        onEliminar={manejarEliminar}
      />
    </div>
  );
}

export default Gestion;
