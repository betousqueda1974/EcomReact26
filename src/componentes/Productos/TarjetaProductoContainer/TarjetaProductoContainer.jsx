import { TarjetaProductoList } from "../TarjetaProductoList/TarjetaProductoList";
import { useState, useEffect } from 'react';
import { readProductos, readProductosDestacados } from "../../../services/productosServices";

export function TarjetaProductoContainer({destacado}) {

  const [productos, setProductos] = useState([]);
  const [error, setError] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const promesa = destacado ? readProductosDestacados() : readProductos();

    promesa.then((productos) => {
      setProductos(productos);
    })

    .catch((error) => {
      setError(error.message)
    })

    .finally(() => {
      setCargando(false)
    });
  }, [destacado]);
  
  if (cargando) {
    return <p>Cargando productos, por favor espere...</p>;
  }
  
  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <TarjetaProductoList productos={productos}/>
  );
}