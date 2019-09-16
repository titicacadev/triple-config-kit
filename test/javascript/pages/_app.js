import React from 'react'
import App from 'next/app'
import Layout from '../src/layout'

export default class MyApp extends App {
  render() {
    const {
      props: { Component, pageProps },
    } = this

    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    )
  }
}
