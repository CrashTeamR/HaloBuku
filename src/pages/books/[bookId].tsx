import Head from "next/head";
import { fetcher, useSWR } from "../../libs";

import { Layout, BookDetails } from "../../components";

function useGetBookData(bookId) {
  const URL = process.env.NEXT_PUBLIC_API_URL;

  const { data, error } = useSWR(`${URL}/books/${bookId}`, fetcher);

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export default function BookId({ bookId }) {
  const { data, isLoading, isError } = useGetBookData(bookId);

  return (
    <Layout>
      <Head>
        <title>Book details | Halo Buku</title>
      </Head>

      {isLoading && <p>Loading book details...</p>}
      {isError && <div>Failed to load book details</div>}
      {!isLoading && !isError && data?.book && (
        <BookDetails book={data?.book} />
      )}
    </Layout>
  );
}

export async function getServerSideProps({ params }) {
  const bookId = params.bookId;

  return {
    props: {
      bookId,
    },
  };
}
