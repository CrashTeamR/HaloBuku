import Head from "next/head";

import { Card, Layout } from "../components";
import type { Books } from "../types";

interface HomeProps {
  data: {
    books: Books;
  };
}

export default function Home({ data }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | Halo Buku</title>
      </Head>

      <Layout>
        <div className="m-auto flex flex-col items-start justify-center px-8">
          <div className="m-auto flex flex-col">
            <div className="my-10 w-full">
              <h1 className="my-4 text-center text-3xl font-bold text-blue-800 lg:text-left">
                Buku Rilisan Terbaru
              </h1>
            </div>
            <div className="mx-auto flex w-full flex-wrap items-center justify-center gap-8 md:max-w-screen-lg xl:justify-start">
              {data?.books?.map((book) => {
                return <Card key={book._id} data={book} />;
              })}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const URL = process.env.NEXT_PUBLIC_API_URL;

  const res = await fetch(`${URL}/books`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
