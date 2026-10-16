import { useState } from "react";
import FormularioProducto from "./FormularioProducto";

function FormularioProductoContainer(){
  const [datosForm, setDatosForm] = useState ({
    id:"",
    nombre:"",
    precio:"",
    stock:""
  }
)

  const manejarCambioIngreso = (evento) => {
    const {name, value} = evento.target;
    setDatosForm({
      ...datosForm,
      [name]:value
    })
  }

  const manejarEnvio = (evento) => {
    evento.preventDefault();
    console.log('Enviando los siguientes datos a la API:', datosForm);
  };

  return (
    <FormularioProducto datosForm={datosForm} manejarCambioIngreso={manejarCambioIngreso} manejarEnvio={manejarEnvio} />
  )
}

export default FormularioProductoContainer