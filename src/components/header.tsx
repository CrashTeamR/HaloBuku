import { blueLogo, shoppingBag, searchIcon } from "../../public/images";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="fixed top-0 z-10 min-w-full bg-gray-200 p-4 shadow-sm">
      <div className="container m-auto flex items-center justify-between">
        <Link href="/">
          <a>
            <Image
              src={blueLogo}
              alt="Brand Logo"
              width={74}
              height={64}
              className="cursor-pointer"
            />
          </a>
        </Link>
        <form className="flex w-1/3 items-center justify-between gap-2 rounded-lg bg-gray-100 py-2 px-5 outline outline-1 outline-blue-200">
          <label
            htmlFor="search-keyword"
            className="cursor-not-allowed opacity-50"
          >
            <Image src={searchIcon} alt="Search Icon" width={24} height={24} />
          </label>
          <input
            type="text"
            name="search-keyword"
            id="search-keyword"
            placeholder="Telusuri judul, penulis, or kata kunci ..."
            className="w-full cursor-not-allowed appearance-none bg-transparent p-2 text-gray-800 placeholder:text-xs placeholder:text-blue-600/40 focus:outline-none disabled:opacity-50"
            disabled
          />
        </form>
        <Image
          src={shoppingBag}
          alt="Shopping Bag Icon"
          className="cursor-not-allowed opacity-50"
        />
      </div>
    </header>
  );
};
