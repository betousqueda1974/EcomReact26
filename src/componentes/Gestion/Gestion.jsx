import { useEffect, useState } from "react";
import { readProductos, crearProducto } from "../../services/productosServices";
import ListadoProductos from "../ListadoProductos/ListadoProductos";
import FormularioProducto from "../FormularioProducto/FormularioProducto";
// import styles from "./Gestion.module.css";

const estadoInicialForm = {
    id: "",
    nombre: "",
    precio: "",
    stock: "",
    imagen: "",
    detalles: "",
    destacado: false
};

function Gestion() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const [datosForm, setDatosForm] = useState(estadoInicialForm);

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

  const manejarEnvio = async (evento) => {
    evento.preventDefault();

    const producto = {
      id: datosForm.id.trim(),
      nombre: datosForm.nombre.trim(),
      precio: Number(datosForm.precio),
      stock: Number(datosForm.stock),
      imagen: datosForm.imagen.trim(),
      detalles: datosForm.detalles.trim(),
      destacado: datosForm.destacado,
    };

    if (
      !producto.id ||
      !producto.nombre ||
      datosForm.precio.trim() === "" ||
      !Number.isFinite(producto.precio) ||
      producto.precio <= 0 ||
      datosForm.stock.trim() === "" ||
      !Number.isInteger(producto.stock) ||
      producto.stock < 0
    ) {
      alert("Verifique los datos ingresados.");
      return;
    }

    try {
      const creado = await crearProducto(producto);

      if (!creado) {
        alert("Ya existe un producto con ese ID.");
        return;
      }

      setProductos((prev) => [...prev, creado]);

      setDatosForm(estadoInicialForm);

      alert("Producto creado correctamente.");
    } catch (error) {
      console.error(error);
      alert("No se pudo crear el producto.");
    }
  };

  return (
    // <div className={styles.container}>
    <div>
      <h2>Gestión de productos</h2>
      <h2>Nuevo Producto</h2>
      {/* <p>Productos: {productos.length}</p> */}

      <FormularioProducto
        datosForm={datosForm}
        manejarCambio={manejarCambio}
        manejarEnvio={manejarEnvio}
      />

      <ListadoProductos productos={productos} />
    </div>
  );
}

export default Gestion;
