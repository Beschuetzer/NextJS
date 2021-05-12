import { articles } from '../../../data';

//NOTE: this file allows for '/api/articles/id' requests to be handled
export default function handler (req, res) {
  const { id } = req.query;
  const filtered = articles.filter(article => article.id === id)

  if (filtered.length > 0) res.status(200).json(filtered[0]);
  else res.status(404).json({ message: `Article with id of ${id} was not Found!` });
}