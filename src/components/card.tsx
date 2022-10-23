import Link from "next/link";

export const Card = ({ data }) => {
  return (
    <>
      <div className="flex h-[30rem] max-w-xs flex-col items-center justify-around rounded-lg border border-gray-200 bg-white py-10 px-10 text-gray-600 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl lg:h-[40rem]">
        <Link href={`/books/${data._id}`}>
          <a className="">
            <img
              src={data.image}
              alt={data.title}
              className="h-80 w-80 object-contain"
            />
          </a>
        </Link>
        <div className="flex max-w-[18rem] flex-col justify-evenly px-5 text-center">
          <h1 className="mb-2 mt-5 text-center text-2xl font-bold tracking-tight">
            {data.title}
          </h1>
          <h3 className="mb-3 font-normal text-gray-500 dark:text-gray-400">
            {data.author}
          </h3>
          <h2 className="text-2xl font-bold tracking-tight text-orange-500">
            {new Intl.NumberFormat("id-ID", {
              style: "currency",
              currency: "IDR",
              maximumSignificantDigits: 3,
            }).format(data.price)}
          </h2>
        </div>
      </div>
    </>
  );
};
