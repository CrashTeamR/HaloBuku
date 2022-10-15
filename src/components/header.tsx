import { blueLogo, shoppingBag, searchIcon } from "../../public/images";
import Image from "next/image";

export const Header = () => {
  return (
    <header className="shadow-sm p-4">
      <div className="container m-auto flex justify-between items-center">
        <Image
          src={blueLogo}
          alt="Brand Logo"
          width={74}
          height={64}
          className="cursor-pointer"
        />
        <form className="">
          <input
            type="search"
            name="search"
            id="search"
            className="appearance-none focus:outline-none p-2"
          />
          <label htmlFor="search">
            <Image src={searchIcon} alt="Search Icon" />
          </label>
        </form>
        <Image
          src={shoppingBag}
          alt="Shopping Bag Icon"
          className="cursor-pointer"
        />
      </div>
    </header>
  );
};
