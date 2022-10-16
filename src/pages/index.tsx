import { Card, RootLayout } from "../components";
import {
  happyBook,
  leftArrow,
  rightArrow,
  basicRightArrow,
} from "../../public/images";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Halo Buku</title>
      </Head>

      <RootLayout>
        <main className="container mx-auto px-2 mt-5 mb-20">
          <div className="my-10">
            <h1 className="text-3xl font-bold text-blue-800">
              Buku Rilisan Terbaru
            </h1>
          </div>
          <div className="flex justify-between items-center gap-3 flex-wrap">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          <div className="bg-white mt-10 flex justify-around items-center rounded-md">
            <a href="#">
              <Image src={leftArrow} alt="Left Arrow" />
            </a>
            <div className="flex items-center">
              <div>
                <Image src={happyBook} alt="Birds Gonna Be Happy" />
              </div>
              <div className="w-96">
                <h1 className="text-blue-800 text-5xl font-bold mb-10">
                  Buku Lainnya
                </h1>
                <h3 className="font-normal text-gray-500">BY TIMBUR HOOD</h3>
                <h2 className="font-bold text-2xl text-blue-800">
                  Birds Gonna Be Happy
                </h2>
                <p className=" text-justify font-normal text-gray-500 my-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  eu feugiat amet, libero ipsum enim pharetra hac.
                </p>
                <h1 className="text-2xl font-bold text-orange-500">
                  Rp 100.000,00
                </h1>
                <button
                  type="button"
                  className="bg-white outline outline-1 outline-blue-400 text-blue-900 w-1/3 py-2 px-4 rounded-md mt-10 flex items-center justify-between hover:outline-2 hover:outline-blue-400"
                >
                  Detail{" "}
                  <Image
                    src={basicRightArrow}
                    alt="Right Arrow Icon"
                    width={18}
                    height={18}
                  />
                </button>
              </div>
            </div>
            <a href="#">
              <Image src={rightArrow} alt="Right Arrow" />
            </a>
          </div>
        </main>
      </RootLayout>
    </>
  );
}
