import { examplePicture } from "../../public/images";
import Image from "next/image";

export const Card = () => {
  return (
    <div className="flex flex-col items-center max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 py-10 px-10">
      <a href="#">
        <Image src={examplePicture} alt="Example" />
      </a>
      <h1 className="mb-2 mt-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        The Mind Connection
      </h1>
      <h3 className="mb-3 font-normal text-gray-500 dark:text-gray-400">
        Joyce Meyer
      </h3>
      <h2 className="text-2xl font-bold tracking-tight text-orange-500 dark:text-white">
        Rp 100.000,00
      </h2>
    </div>
  );
};
