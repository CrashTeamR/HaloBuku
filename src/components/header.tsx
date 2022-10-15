import { logo, shoppingBag } from "../../public/images";
import Image from "next/image";

export const Header = () => {
  return (
    <header className=" shadow-sm p-4">
      <div className="container m-auto flex justify-between items-cente">
        <Image
          src={logo}
          alt={"Brand Logo"}
          width={74}
          height={64}
          className={"cursor-pointer"}
        />
        <Image
          src={shoppingBag}
          alt={"Shopping Bag Icon"}
          className={"cursor-pointer"}
        />
      </div>
    </header>
  );
};
