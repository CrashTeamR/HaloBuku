import Head from "next/head";
import Image from "next/image";

import { fetcher, useSWR } from "../../libs";
import { Layout } from "../../components";
import type { Book } from "../../types";
import { useRouter } from "next/router";

interface BookDetailsProps {
  book: Book;
}

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

export const BookDetails = ({ book }: BookDetailsProps) => {
  return (
    <section className="mt-8 flex flex-col items-center gap-8 lg:flex-row lg:justify-center">
      <Head>
        <title>{book?.title || "Judul buku"} | Halo Buku</title>
      </Head>

      <Image
        src={book?.image}
        alt="Example Picture"
        className="shadow-xl"
        width={413}
        height={602}
      />
      <div className="flex flex-col justify-center gap-8 p-4 md:px-12 lg:w-1/2 lg:p-2">
        <div>
          <h1 className="my-3 text-4xl font-bold text-blue-800 lg:text-5xl">
            {book?.title}
          </h1>
          <h6 className="text-sm uppercase text-gray-500">By {book?.author}</h6>
        </div>

        <div className="flex flex-col gap-2">
          <div>
            <h4 className="my-1 text-base text-gray-700">Harga</h4>
            <h3 className="text-xl font-semibold">
              {book?.price.toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
              })}
            </h3>
          </div>
          <div>
            <h4 className="my-1 text-base text-gray-700">Tahun Terbit</h4>
            <h3 className="text-xl font-semibold">{book?.publishedYear}</h3>
          </div>
        </div>

        <hr className="w-1/2 border-2 border-orange-600" />

        <div>
          <h3 className="my-2 text-xl font-bold">Deskripsi</h3>
          <p>{book?.description}</p>
        </div>
      </div>
    </section>
  );
};
