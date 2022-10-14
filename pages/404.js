import React from 'react'
import Link from 'next/link'
import Layout from '../components/layout'

const Pagina404 = () => {
  return (
    <Layout
    title='Pagina no encontrada'>
        <p className='error'>Pagina no encontrada</p>
        <Link href="/">
            <a className='error-enlace'>
                Ir a inicio
            </a>
        </Link>
    </Layout>
  )
}

export default Pagina404