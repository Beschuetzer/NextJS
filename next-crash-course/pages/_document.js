//NOTE: This is called the 'Custom Document' and found on NextJS docs;  it creates the html and body tags

import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang='eng'>

        {/* The <Head /> component used here is not the same one from next/head. The <Head /> component used here should only be used for any <head> code that is common for all pages. For all other cases, such as <title> tags, we recommend using next/head in your pages or components. */}
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument