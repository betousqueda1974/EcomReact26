import { collection, getDocs, doc, getDoc, setDoc, deleteDoc } from "firebase/firestore";
import { db } from "../firestore/config";

//Conexión a la BD
const cuponesDB = collection(db, "cupones")

//Obtener productos
export const readCupones = async () => {
  const resp = await getDocs(cuponesDB);

  return resp.docs.map((doc) => ({...doc.data(), id: doc.id,}));
};

//Crear productos
export const crearCupones = async (cupones) => {
    const { id, ...datosCupones } = cupones;

    if (!id?.trim()) {
        throw new Error("El ID es obligatorio.");
    }

    const idLimpio = id.trim();
    const docRef = doc(db, "cupones", idLimpio);
    const documentoExistente = await getDoc(docRef);    

    if (documentoExistente.exists()) {
        return null;
    }   

    await setDoc(docRef, datosCupones);

    return { ...datosCupones, id: idLimpio };
};

//DELETE
export const eliminarCupon = async (id) => {
  const docRef = doc(db, "cupones", id);

  await deleteDoc(docRef);
};