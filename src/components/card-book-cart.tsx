export const CardBookCart = ({ data }) => {
  return (
    <>
      <div className="container flex h-60  items-center  gap-4   border-b-2 border-black/10 py-12">
        <img
          src={data.image}
          className=" h-full bg-cover object-contain"
          alt={`${data.title} Cover`}
        />

        <div className="flex w-full justify-between gap-8 ">
          <div>
            <h1 className=" text-lg font-bold text-blue-800 lg:text-2xl">
              {data.title}
            </h1>
            <h3 className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              {data.author}
            </h3>
          </div>

          <div className="flex flex-col gap-1">
            <h4 className="my-1 text-base text-gray-700">Harga</h4>
            <h3 className="text-sm font-semibold">
              {new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
                maximumSignificantDigits: 3,
              }).format(data.price)}
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};
