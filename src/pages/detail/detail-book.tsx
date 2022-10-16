import { happyBook } from "../../../public/images";
import { Layout } from "../../components";
import Image from "next/image";

export default function DetailBook() {
  return (
    <Layout>
      <section className="flex flex-col items-center lg:flex-row lg:justify-center">
        <Image src={happyBook} alt="Example Picture" className="shadow-xl" />
        <div className="flex flex-col justify-center gap-8 lg:w-1/2 p-4 md:px-12 lg:p-2">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-blue-800 my-3">
              Birds gonna be happy
            </h1>
            <h6 className="text-gray-500 text-sm uppercase">By Timbur Hood</h6>
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

          <div>
            <h3 className="font-bold text-xl my-2">Deskripsi</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              delectus hic fugiat voluptatum id ipsum maiores error porro in
              deserunt! Exercitationem vel commodi a tempora velit ducimus et
              repellendus in fuga ipsam, illum, laborum necessitatibus veritatis
              incidunt enim voluptatum ex? Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Repellendus inventore eveniet eaque
              aperiam soluta, consequatur quaerat optio dolor qui delectus.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
