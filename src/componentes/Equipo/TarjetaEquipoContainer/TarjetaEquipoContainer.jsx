import { useState, useEffect } from 'react';
import { TarjetaEquipoList } from '../TarjetaEquipoList/TarjetaEquipoList.jsx';
import { readEquipo } from '../../../services/equipoServices.js';

export function TarjetaEquipoContainer() {

  const [equipo, setEquipo] = useState([]);
  const [error, setError] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
  
    readEquipo()
      .then((datos) => {setEquipo(datos);})

      .catch((error) => {setError(error.message)})

      .finally(() => {setCargando(false)});
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