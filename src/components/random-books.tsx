import {
  happyBook,
  leftArrow,
  rightArrow,
  basicRightArrow,
} from "../../public/images";

import Image from "next/image";

export function RandomBooks() {
  return (
    <div className="mt-10 flex items-center justify-around rounded-md bg-white">
      <a href="#">
        <Image src={leftArrow} alt="Left Arrow" />
      </a>
      <div className="flex items-center">
        <div>
          <Image src={happyBook} alt="Birds Gonna Be Happy" />
        </div>
        <div className="w-96">
          <h1 className="mb-10 text-5xl font-bold text-blue-800">
            Buku Lainnya
          </h1>
          <h3 className="font-normal text-gray-500">BY TIMBUR HOOD</h3>
          <h2 className="text-2xl font-bold text-blue-800">
            Birds Gonna Be Happy
          </h2>
          <p className=" my-5 text-justify font-normal text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
            feugiat amet, libero ipsum enim pharetra hac.
          </p>
          <h1 className="text-2xl font-bold text-orange-500">Rp 100.000,00</h1>
          <button
            type="button"
            className="mt-10 flex w-1/3 items-center justify-between rounded-md bg-white py-2 px-4 text-blue-900 outline outline-1 outline-blue-400 hover:outline-2 hover:outline-blue-400"
          >
            Detail{" "}
            <Image
              src={basicRightArrow}
              alt="Right Arrow Icon"
              width={18}
              height={18}
            />
          </button>
        </div>
      </div>
      <a href="#">
        <Image src={rightArrow} alt="Right Arrow" />
      </a>
    </div>
  );
}
