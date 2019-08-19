import React from 'react'
import Document, { Head, Main, NextScript, DocumentContext, DocumentProps } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import '@titicaca/triple-design-system/lib/global-style'

interface MyDocumentProps extends DocumentProps {
  styleTags?: string
}

export default class MyDocument extends Document<MyDocumentProps> {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    /* pre render styled component */
    const sheet = new ServerStyleSheet()
    const page = ctx.renderPage((App) => (props) => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()

    return { ...initialProps, ...page, styleTags }
  }

  render() {
    return (
      <html>
        <Head>{this.props.styleTags}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
