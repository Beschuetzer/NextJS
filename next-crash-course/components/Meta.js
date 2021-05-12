import Head from 'next/head';
import React from 'react';

//NOTE: npm 'next-seo' is a good package to handle meta data stuff
const Meta = ({title, keywords, description}) => {
  return (
    <Head>
      <meta 
        name='viewport'
        content='width=device-width, initial-scale=1'
      />
      <meta 
        name='keywords'
        content={keywords}
      />
      <meta
        name='description'
        content={description}
      />
      <meta
        charSet='utf-8'
      />
      <link rel='icon' href='/favicon.ico'/>
      <title>{title}</title>
    </Head>
  );
}

Meta.defaultProps = {
  title: 'WebDev News',
  keywords: 'web dev, programming, etc',
  description: 'get the latest news about web dev',
}

export default Meta;