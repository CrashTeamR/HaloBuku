import { Card, Layout, RandomBooks } from "../components";
import Head from "next/head";
import React from "react";

interface Book {
  _id: string;
  title: string;
  author: string;
  image: string;
  description: string;
  isAvailable: boolean;
  price: number;
  quantity: number;
  publishedYear?: number;
}

export default function Home({ data }) {
  // const;

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
        <div className="flex justify-center md:justify-between items-center gap-3 flex-wrap">
          {data.books?.map((book) => {
            return (
              <React.Fragment key={book._id}>
                <Card data={book} />
              </React.Fragment>
            );
          })}
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  // Call an external API endpoint to get books.
  // You can use any data fetching library
  const res = await fetch("https://halobuku.ericprd.site/api/v1/books");
  const data = await res.json();

  // By returning { props: { books } }, the Blog component
  // will receive `books` as a prop at build time
  return {
    props: {
      data,
    },
  };
}
