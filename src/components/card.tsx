import Image from "next/image";
import Link from "next/link";

export const Card = ({ data }) => {
  return (
    <>
      <Link href={`/books/${data._id}`}>
        <a className="flex h-[30rem] max-w-xs flex-col items-center rounded-lg border border-gray-200 bg-white py-10 px-10 text-gray-600 shadow-md">
          <Image
            src={data.image}
            alt={data.title}
            width={300}
            height={300}
            className="bg-cover object-contain"
          />
          <div className="mt-10 max-w-[18rem] px-5 text-center">
            <h1 className="mb-2 mt-5 truncate text-center text-2xl font-bold tracking-tight">
              {data.title}
            </h1>
            <h3 className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              {data.author}
            </h3>
            <h2 className="text-2xl font-bold tracking-tight text-orange-500">
              {data.price.toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
              })}
            </h2>
          </div>
        </a>
      </Link>
    </>
  );
};
