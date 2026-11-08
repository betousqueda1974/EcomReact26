import { useParams } from "react-router-dom"

function ProductoDetalle(){

  const {id} = useParams();

  return (
    <>
      <h1>Producto</h1>
      <p>Id del producto es: {id}</p>
    </>
  )

}
export default ProductoDetalle