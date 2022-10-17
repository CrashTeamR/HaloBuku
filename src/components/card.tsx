import Image from "next/image";
import Link from "next/link";

export const Card = ({ data }) => {
  return (
    <>
      <Link href={`/books/${data._id}`}>
        <a className="flex h-[35rem] max-w-sm flex-col items-center rounded-lg border border-gray-200 bg-white py-10 px-10 shadow-md dark:border-gray-700 dark:bg-gray-800">
          <Image
            src={data.image}
            alt="Example"
            width={300}
            height={500}
            className="bg-cover object-center"
          />
          <h1 className="mb-2 mt-5 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {data.title}
          </h1>
          <h3 className="mb-3 font-normal text-gray-500 dark:text-gray-400">
            {data.author}
          </h3>
          <h2 className="text-2xl font-bold tracking-tight text-orange-500 dark:text-white">
            {data.price.toLocaleString("id-ID", {
              style: "currency",
              currency: "IDR",
            })}
          </h2>
        </a>
      </Link>
    </>
  );
};
