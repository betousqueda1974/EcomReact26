import { collection, getDocs } from "firebase/firestore";
import { db } from "../firestore/config";

//Conexión a la BD
const equipoDB = collection(db, "equipo")

//Obtener equipo
export const readEquipo = async () => {
  const resp = await getDocs(equipoDB);

  return resp.docs.map((doc) => ({...doc.data(), id: doc.id,}));
};