import { Layout, CardBookCart } from "../../components";
import Head from "next/head";
import axios from "axios";
import { useSWR } from "../../libs";
import { useEffect, useState } from "react";

const fetcher = (url) => {
  const token = localStorage.getItem("token");
  const data = axios
    .get(url, { headers: { Authorization: "Bearer " + token } })
    .then((res) => res.data);

  return data;
};

function useGetUserCart() {
  const URL = process.env.NEXT_PUBLIC_API_URL;
  const { data, error } = useSWR(`${URL}/cart/`, fetcher);

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export default function Login() {
  const { data, isLoading, isError } = useGetUserCart();

  const handleTotalPrice = (booksData) => {
    const totalPrice = booksData.reduce((total, { price }) => {
      return (total += price);
    }, 0);

    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumSignificantDigits: 3,
    }).format(totalPrice);
  };
  return (
    <Layout>
      {isLoading && <h1>Memuat ...</h1>}

      {isError && <div>Gagal memuat data keranjang buku</div>}
      {!isLoading && !isError && data?.books && (
        <>
          <Head>
            <title>Keranjang | Halo Buku</title>
          </Head>

          <div className="relative flex w-full flex-col items-center justify-center lg:flex-row lg:items-start lg:justify-between">
            <div className="flex w-[70%] flex-col gap-12">
              <h1 className="my-4 text-center text-3xl font-bold text-blue-800 xl:text-left">
                Keranjang Anda
              </h1>
              <div className="flex  flex-col gap-12 ">
                {data.books.map((book) => (
                  <CardBookCart key={book._id} data={book} />
                ))}
              </div>
            </div>
            <div className="mt-8 h-max w-full rounded-lg p-8 shadow-lg lg:sticky lg:top-28 lg:mt-0 lg:w-[25%]">
              <div className="flex flex-col justify-center gap-4 border-b-2 border-b-black/10 pb-8">
                <h1 className="text-xl font-bold">Ringkasan belanja</h1>
                <div className="flex justify-between">
                  <h3 className="text-black/70">
                    Total barang ({data.books.length})
                  </h3>
                  <h3 className="text-black/70">
                    {handleTotalPrice(data?.books)}
                  </h3>
                </div>
              </div>
              <div className="mt-8 flex flex-col justify-center gap-4 border-b-2 border-b-white/10 pb-8">
                <div className="flex justify-between">
                  <h3 className="text-xl font-bold">Total Harga </h3>
                  <h3 className="font-bold">{handleTotalPrice(data?.books)}</h3>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </Layout>
  );
}
