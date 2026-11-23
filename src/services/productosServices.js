import { collection, getDocs, query, where, doc, getDoc, setDoc, updateDoc, deleteDoc} from "firebase/firestore";
import {db} from "../firestore/config"

//Conexión a la BD
const productosDB = collection(db, "productos")


//Obtener productos
export const readProductos = async () => {
  const resp = await getDocs(productosDB);

  return resp.docs.map((doc) => ({...doc.data(), id: doc.id,}));
};


//Obtener productos destacados
export const readProductosDestacados = async () => {
  const consulta = query(productosDB, where("destacado", "==", true));

  const resp = await getDocs(consulta);

  return resp.docs.map((doc) => ({...doc.data(), id: doc.id,}));
};


//Crear productos
export const crearProducto = async (producto) => {
    const { id, ...datosProducto } = producto;

    if (!id?.trim()) {
		    throw new Error("El ID es obligatorio.");
		}

		const idLimpio = id.trim();
    const docRef = doc(db, "productos", idLimpio);
    const documentoExistente = await getDoc(docRef);    

    if (documentoExistente.exists()) {
        return null;
    }   

    await setDoc(docRef, datosProducto);

    return { ...datosProducto, id: idLimpio };
};


//UPDATE
export const actualizarProducto = async (producto) => {
  const { id, ...datosProducto } = producto;
  
  if (!id?.trim()) {
    throw new Error("El ID es obligatorio.");
  }

  const idLimpio = id.trim();
  const docRef = doc(db, "productos", idLimpio);

  await updateDoc(docRef, datosProducto);

  return { ...datosProducto, id: idLimpio };
};


//DELETE
export const eliminarProducto = async (id) => {
  const docRef = doc(db, "productos", id);

  await deleteDoc(docRef);
};