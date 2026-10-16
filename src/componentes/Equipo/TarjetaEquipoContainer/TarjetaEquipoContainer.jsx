import { useState, useEffect } from 'react';
import { TarjetaEquipoList } from '../TarjetaEquipoList/TarjetaEquipoList.jsx';

export function TarjetaEquipoContainer() {

  const [equipo, setEquipo] = useState([]);
  const [error, setError] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    fetch('/data/equipo.json')
    .then((respuesta) => {
      if (!respuesta.ok) {
        throw new Error('No se pudo cargar la información del equipo de trabajo')
      }
      return respuesta.json();
      })

    .then((datos) => {
      setEquipo(datos)
    })

    .catch((error) => {
      setError(error.message)
    })

    .finally(() => {
      setCargando(false)
    });
  }, []);
  
  if (cargando) {
    return <p>Cargando al equipo de trabajo, por favor espere...</p>;
  }
  
  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <TarjetaEquipoList equipo={equipo}/>
  );
}