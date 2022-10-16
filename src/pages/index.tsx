import { Card, Layout, RandomBooks } from "../components";
import Head from "next/head";
import React from "react";

export default function Home({ data }) {
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
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/books`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
