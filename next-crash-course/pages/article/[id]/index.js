import { useRouter } from 'next/router';

const article = () => {
  //NOTE: useRouter() is used to access the query params
  const router = useRouter();
  const { id } = router.query;


  return (
    <div>
      This is an article
    </div>
  );
}

export default article;