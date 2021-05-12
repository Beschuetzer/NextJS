//NOTE: This was created in order to get around fetch only accepting absolute urls (in pages/index.js, we make a fetch request to the api we made in '/pages/api/articles')

const dev = process.env.NODE_ENV !== 'production';

export const server = dev ? 'http://localhost:3000' : 'https:yourwebsite.com';