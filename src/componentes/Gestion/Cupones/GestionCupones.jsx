import { useState, useEffect } from "react";
import { readCupones, crearCupones, eliminarCupon } from "../../../services/cuponesServices";
import FormularioCupon from "./FormularioCupon";
import ListadoCupones from "./FormularioListadoCupones";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const estadoInicialForm = {
    id: "",
    nombre: "",
    descuento: "",
    habilitado: false
};

function GestionCupones() {
  const [cupones, setCupones] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const [datosForm, setDatosForm] = useState(estadoInicialForm);

  useEffect(() => {
    const cargarCupones = async () => {
      try {
        const datos = await readCupones();
        setCupones(datos);
      } catch (error) {
        setError(error.message);
      } finally {
        setCargando(false);
      }
    };
    cargarCupones();
  }, []);

  if (cargando) {
    return <p>Cargando cupones...</p>;
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

  const manejarEliminar = async (id) => {

   /*  const confirmar = window.confirm(
    "¿Desea eliminar este cupón? Esta acción no se puede deshacer.");

    if (!confirmar) {
      return;
    } */

    const resultado = await Swal.fire({
      title: "¿Elimina el cupón?",
      text: "Esta acción no se puede deshacer.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d98c5f",
      cancelButtonColor: "#6c757d",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    });

    if (!resultado.isConfirmed) {
      return;
    }
    
    try {
      await eliminarCupon(id);

      setCupones((prev) => prev.filter((cupon) => cupon.id !== id));

      toast.success("Cupón eliminado correctamente.");

    } catch (error) {
      console.error(error);
      toast.error("No se pudo eliminar el cupón.");
    }
  };


  const manejarEnvio = async (evento) => {
    evento.preventDefault();

    const cupones = {
      id: datosForm.id.trim(),
      nombre: datosForm.nombre.trim(),
      descuento: Number(datosForm.descuento),
      habilitado: datosForm.habilitado,
    };

    if (
      !cupones.id ||
      !cupones.nombre ||
      cupones.descuento <= 0 ||
      !Number.isFinite(cupones.descuento)
    ) {
      toast.warning("Revise los datos ingresados antes de continuar.");
      return;
    }

    try {
      const creado = await crearCupones(cupones);

      if (!creado) {
        toast.error(`Ya existe un cupón con el ID "${cupones.id}".`);
        return;
      }

      setCupones((prev) => [...prev, creado]);

      toast.success(`El cupón "${creado.nombre}" fue creado correctamente.`);

      setDatosForm(estadoInicialForm);

    } catch (error) {
      console.error(error);
      toast.error("No se pudo crear el cupón.");
    }
  };

  return (
    <div>

      <FormularioCupon
        datosForm={datosForm}
        manejarCambio={manejarCambio}
        manejarEnvio={manejarEnvio}
      />

      <ListadoCupones
        cupones={cupones}
        onEliminar={manejarEliminar}
      />
    </div>
  );
}

export default GestionCupones;
