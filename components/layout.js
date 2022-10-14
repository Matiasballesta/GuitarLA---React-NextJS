import Head from "next/head"
import Header from "./header"
import Footer from "./footer"

const Layout = ({children, title = '', descripcion = ''}) => {
  return (
    <>
    <Head>
     <title>{`GuitarLA - ${title}`}</title>
    </Head>
    <Header />
    {children}
    <Footer/>
    </>
  )
}

export default Layout