import { Layout, CardBookCart } from "../../components";
import Head from "next/head";
import axios from "axios";
import { useSWR } from "../../libs";

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

  console.log(data?.books, "okeoke");
  return (
    <Layout>
      {isLoading && <h1>Memuat ...</h1>}

      {isError && <div>Gagal memuat data keranjang buku</div>}
      {!isLoading && !isError && data?.books && (
        <>
          <Head>
            <title>Keranjang | Halo Buku</title>
          </Head>

          <div className="flex flex-col items-start justify-center">
            <div className="mx-auto flex flex-col justify-center">
              <div className="my-10 w-full">
                <h1 className="my-4 text-center text-3xl font-bold text-blue-800 xl:text-left">
                  Keranjang Anda
                </h1>
              </div>
              <div className="mx-auto flex w-full flex-wrap items-center justify-center gap-8 md:max-w-screen-lg xl:justify-start">
                {data.books.map((book) => (
                  <CardBookCart key={book._id} data={book} />
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </Layout>
  );
}
