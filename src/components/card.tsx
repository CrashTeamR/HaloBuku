import Image from "next/image";
import Link from "next/link";

export const Card = ({ data }) => {
  return (
    <>
      <Link href={`/books/${data._id}`}>
        <a className="flex flex-col items-center max-w-sm h-[35rem] bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 py-10 px-10">
          <Image
            src={data.image}
            alt="Example"
            width={300}
            height={300}
            className="object-cover"
          />
          <h1 className="mb-2 mt-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
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
