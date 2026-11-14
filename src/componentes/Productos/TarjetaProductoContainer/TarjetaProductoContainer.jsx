import { TarjetaProductoList } from "../TarjetaProductoList/TarjetaProductoList";
import { useState, useEffect } from 'react';

import { collection, getDocs } from "firebase/firestore";
import {db} from "../../../firestore/config"

export function TarjetaProductoContainer() {

  const [productos, setProductos] = useState([]);
  const [error, setError] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const productosDB = collection(db, "productos")

    getDocs(productosDB).then((resp) => {
      setProductos(
        resp.docs.map((doc) => {
          return{...doc.data(), id: doc.id }
        })
      )
      
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

  return (
    <TarjetaProductoList productos={productos}/>
  );
}