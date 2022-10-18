import { whiteLogo } from "../../public/images";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="bg-blue-800 p-4 text-gray-100">
      <div className="container m-auto flex items-center justify-between">
        <Image src={whiteLogo} alt="Brand Logo" width={64} height={54} />
        <h6>&#169; 2022 Halo Buku. All Rights Reserved.</h6>
      </div>
    </footer>
  );
};
