import { collection, getDocs, query, where } from "firebase/firestore";
import {db} from "../firestore/config"

const productosDB = collection(db, "productos")

export const readProductos = async () => {
  const resp = await getDocs(productosDB);

  return resp.docs.map((doc) => ({...doc.data(), id: doc.id,}));
};

export const readProductosDestacados = async () => {
  const consulta = query(productosDB, where("destacado", "==", true));

  const resp = await getDocs(consulta);

  return resp.docs.map((doc) => ({...doc.data(), id: doc.id,}));
};