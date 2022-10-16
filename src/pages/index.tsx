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
        <div className="my-10">
          <h1 className="text-3xl font-bold text-blue-800 text-center my-4 md:text-left">
            Buku Rilisan Terbaru
          </h1>
        </div>
        <div className="flex max-w-screen-xl justify-center md:justify-start mx-auto items-center px-5 gap-3 flex-wrap">
          {data?.books?.map((book) => {
            return <Card key={book._id} data={book} />;
          })}
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${process.env.API_URL}/books`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
