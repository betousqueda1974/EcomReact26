import TarjetaProducto from "../TarjetaProducto/TarjetaProducto";
import styles from "./TarjetaProductoList.module.css"

export function TarjetaProductoList ({productos})
{

  return (
    <section className={styles.productos}>
      {productos.map((producto) => (
        <TarjetaProducto
          key={producto.id}
          {...producto}
        />
      ))}
    </section>
  );

}