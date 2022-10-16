import { happyBook } from "../../../public/images";
import { RootLayout } from "../../components";
import Image from "next/image";

export default function DetailBook() {
  return (
    <RootLayout>
      <section className="flex flex-col items-center lg:flex-row">
        <Image src={happyBook} alt="Example Picture" />
        <div className="flex flex-col gap-8">
          <div>
            <h1 className="text-5xl font-bold text-blue-800 my-2">
              Birds gonna be happy
            </h1>
            <h2 className="text-gray-500 text-sm uppercase">By Timbur Hood</h2>
          </div>
          <div className="flex flex-col gap-2">
            <div>
              <h4 className="text-base text-gray-700 my-1">Harga</h4>
              <h3 className="text-xl font-semibold">Rp 100.000, 00</h3>
            </div>
            <div>
              <h4 className="text-base text-gray-700 my-1">Tahun Terbit</h4>
              <h3 className="text-xl font-semibold">2018</h3>
            </div>
          </div>
          <div className="border-2 border-orange-600 w-1/2"></div>
        </div>
      </section>
    </RootLayout>
  );
}
