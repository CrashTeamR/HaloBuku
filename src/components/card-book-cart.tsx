export const CardBookCart = ({ data }) => {
  return (
    <>
      <div className="flex max-h-52 w-full flex-col items-center gap-2 p-2">
        <img
          src={data.image}
          className="bg-cover object-contain sm:h-56"
          alt={`${data.title} Cover`}
        />
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold">{data.title}</h1>
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
