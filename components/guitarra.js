import Image from "next/future/image";
import Link from 'next/link'
import styles from '../styles/guitarras.module.css'

const Guitarra = ({ guitarra }) => {
  const { descripcion, imagen, nombre, price, url } = guitarra;
  return (
    <div className={styles.guitarra}>
      <Image
        src={imagen.data.attributes.formats.medium.url}
        width={600}
        height={400}
        alt={`Imagenes guitarra ${nombre}`}
      />
      <div className={styles.contenido}>
        <h3>{nombre}</h3>
        <p className={styles.descripcion}>{descripcion}</p>
        <p className={styles.precio}>${price}</p>
        <Link href={`/guitarras/${url}`}>
          <a className={styles.enlace}>
            Ver producto
          </a>
          </Link>
      </div>
    </div>
  );
};

export default Guitarra;
