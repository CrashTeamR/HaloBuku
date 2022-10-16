import { Card, RootLayout, RandomBooks } from "../components";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Halo Buku</title>
      </Head>

      <RootLayout>
        <div className="my-10">
          <h1 className="text-3xl font-bold text-blue-800 text-center my-4 md:text-left">
            Buku Rilisan Terbaru
          </h1>
        </div>
        <div className="flex justify-center md:justify-between items-center gap-3 flex-wrap">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <RandomBooks />
      </RootLayout>
    </>
  );
}
