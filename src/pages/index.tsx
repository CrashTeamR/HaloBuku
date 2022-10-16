import { Card, RootLayout } from "../components";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Halo Buku</title>
      </Head>
      

      <RootLayout>
        <main className="container mx-auto px-2 my-5">
          <div className="my-10">
            <h1 className="text-3xl font-bold text-blue-800">Buku Rilisan Terbaru</h1>
          </div>
          <div className="flex justify-between items-center gap-3 flex-wrap">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </main>
      </RootLayout>
    </>
  );
}
