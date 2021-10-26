import Head from 'next/head'
import React from 'react'
import { Container } from './styles'

type LayoutType = {
  title: string,
  children: React.ReactNode
}

export const Layout = ({title, children}: LayoutType) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Container>
        {children}
      </Container>
    </>
  )
}
