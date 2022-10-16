import { Layout } from "../../components";
import Image from "next/image";
import useSWR from "swr";
import { useRouter } from "next/router";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function useGetBookData(bookId) {
  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/books/${bookId}`,
    fetcher
  );
  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export default function DetailBook() {
  const router = useRouter();
  const { bookId } = router.query;
  const { data, isLoading, isError } = useGetBookData(bookId);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Failed to load</div>;

  return (
    <Layout>
      <section className="flex flex-col gap-8 items-center lg:flex-row lg:justify-center mt-8">
        <Image
          src={data?.book?.image}
          alt="Example Picture"
          className="shadow-xl"
          width={413}
          height={602}
        />
        <div className="flex flex-col justify-center gap-8 lg:w-1/2 p-4 md:px-12 lg:p-2">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-blue-800 my-3">
              {data?.book?.title}
            </h1>
            <h6 className="text-gray-500 text-sm uppercase">
              By {data?.book?.author}
            </h6>
          </div>

          <div className="flex flex-col gap-2">
            <div>
              <h4 className="text-base text-gray-700 my-1">Harga</h4>
              <h3 className="text-xl font-semibold">
                {data?.book?.price.toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR",
                })}
              </h3>
            </div>
            <div>
              <h4 className="text-base text-gray-700 my-1">Tahun Terbit</h4>
              <h3 className="text-xl font-semibold">
                {data?.book?.publishedYear}
              </h3>
            </div>
          </div>

          <div className="border-2 border-orange-600 w-1/2"></div>

          <div>
            <h3 className="font-bold text-xl my-2">Deskripsi</h3>
            <p>{data?.book?.description}</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
