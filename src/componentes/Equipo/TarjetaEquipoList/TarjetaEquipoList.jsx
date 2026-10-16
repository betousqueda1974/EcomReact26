import TarjetaEquipo from "../TarjetaEquipo/TarjetaEquipo";
import styles from "./TarjetaEquipoList.module.css"

export function TarjetaEquipoList ({equipo})
{

  return (
    <section className={styles.equipo}>
      {equipo.map((integrante) => (
        <TarjetaEquipo
          key={integrante.id}
          {...integrante}
        />
      ))}
    </section>
  );

}