import TarjetaProducto from "../TarjetaProducto/TarjetaProducto";

export function TarjetaProductoList ({productos})
{

  return (
    <div>
      {productos.map((producto) => (
        <TarjetaProducto
          key={producto.id}
          {...producto}
        />
      ))}
    </div>
  );

}