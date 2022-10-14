import Layout from "../components/layout";
import Image from "next/future/image"
import styles from "../styles/nosotros.module.css"

const Nosotros = () => {
  return (
    <Layout
      title={"Nosotros"}
      descripcion="Sobre nostros, guitarLA, tienda de musica"
    >
      <main className="contenedor">
        <h2 className="heading">Nosotros</h2>
        <div className={styles.contenido}>
            <Image src="/img/nosotros.jpg" width={1000} height={800} alt="Imagen sobre nosotros" />
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              fermentum velit non arcu tincidunt, sit amet viverra elit
              vehicula. Quisque congue vulputate turpis id accumsan. Nam eget
              faucibus lorem, pellentesque ornare nulla. Curabitur eget purus
              convallis, mollis risus gravida, facilisis risus. Donec consequat
              augue felis, a feugiat arcu vulputate ac. Duis egestas purus ac
              velit porttitor posuere.
            </p>
            <p>
              Praesent consectetur eget elit in bibendum. Nullam ac pellentesque
              massa. Vestibulum a diam non odio iaculis vestibulum id id odio.
              Maecenas aliquam mollis imperdiet. Vivamus quis erat aliquam,
              mollis nibh sed, tempus tellus. Proin aliquam lacus vel nisl
              vehicula malesuada.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Nosotros;
