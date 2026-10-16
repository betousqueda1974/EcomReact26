import styles from "./TarjetaEquipo.module.css"

function TarjetaEquipo({imagen, nombre, rol, email}) {

  return (
    <article className={styles.card}>
      <img className={styles.image} src={imagen} alt={nombre} />
      <h3 className={styles.name}>{nombre}</h3>
      <p className={styles.rol}>{rol}</p>
      <p className={styles.email}>{email}</p>
    </article>
  );
}

export default TarjetaEquipo;