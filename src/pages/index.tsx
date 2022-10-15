import { RootLayout } from "../components";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Halo Buku</title>
      </Head>

      <RootLayout>
        <main className="">Typescript gokil!</main>
      </RootLayout>
    </>
  );
}
