import type { Books } from "../../types";
import { Layout, Card } from "../../components";
import Head from "next/head";

interface SearchProps {
  data: {
    books: Books;
  };
  query: {
    q: string;
  };
}

export default function SearchPage({ data, query }: SearchProps) {
  const { books } = data;

  return (
    <>
      <Head>
        <title>{query.q} | Halo Buku</title>
      </Head>

      <Layout>
        <div className="m-auto flex flex-col items-start justify-center px-8">
          <div
            className={`m-auto ${
              !books.length ? "grid h-[40vh]" : "flex flex-col"
            } `}
          >
            <div className="my-10  w-full">
              <h1 className="my-4 text-center text-3xl font-bold text-blue-800 xl:text-left">
                {books.length ? "Hasil Pencarian" : ""}
              </h1>
            </div>
            <div className="mx-auto flex w-full flex-wrap items-center justify-center gap-8 md:max-w-screen-lg xl:justify-start">
              {!books.length ? (
                <div className="flex flex-col text-center ">
                  <h2 className="text-xl font-bold">Tidak ditemukan hasil</h2>
                  <h3 className="text-xs md:text-base">
                    Coba kata kunci lain atau hapus filter penelusuran
                  </h3>
                </div>
              ) : (
                books.map((book) => {
                  return <Card key={book._id} data={book} />;
                })
              )}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export async function getServerSideProps({ query }) {
  const URL = process.env.NEXT_PUBLIC_API_URL;

  const res = await fetch(`${URL}/books`);
  const data = await res.json();

  const filteredBooks = !query.q
    ? []
    : data.books.filter((book) => {
        return `${book.title.toLowerCase()} ${book.author.toLowerCase()}`.includes(
          query.q
        );
      });

  return {
    props: { data: { books: filteredBooks }, query },
  };
}
