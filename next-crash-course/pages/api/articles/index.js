import { articles } from '../../../data';

//NOTE: anything in side of the api folder is accessible automatically following the same folder structure (e.g. articles here is available at 'http://localhost:3000/api/articles')
export default function handler (req, res) {
  res.status(200).json(articles);
}