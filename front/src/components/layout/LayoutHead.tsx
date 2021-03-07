import React from 'react'
import Head from 'next/head'
// import styled from 'styled-components'

const LayoutHead: React.FC = () => {
  return (
    <>
      <Head>
        <html lang="es" />
        <title>Mi ecomerce</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link href="/static/css/app.css" rel="stylesheet" />
      </Head>
    </>
  )
}

export default LayoutHead
