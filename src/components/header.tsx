import { blueLogo, shoppingBag, searchIcon } from "../../public/images";
import Image from "next/image";
import Link from "next/link";
import LoginButton from "./login-button";
import RegisterButton from "./register-button";

export const Header = () => {
  return (
    <header className="fixed top-0 z-10 min-w-full bg-gray-200 p-[0.5rem_2rem] shadow-md">
      <div className="container m-auto flex items-center justify-between">
        <Link href="/">
          <a>
            <Image
              src={blueLogo}
              alt="Brand Logo"
              width={54}
              height={44}
              className="cursor-pointer"
            />
          </a>
        </Link>
        <form className="relative flex w-3/6 translate-x-10  items-center justify-between gap-2 rounded-lg bg-gray-100 py-2 px-5 outline outline-1 outline-blue-200">
          <label
            htmlFor="search-keyword"
            className="flex cursor-not-allowed items-center opacity-50"
          >
            <Image src={searchIcon} alt="Search Icon" width={24} height={24} />
          </label>
          <input
            type="text"
            name="search-keyword"
            id="search-keyword"
            placeholder="Telusuri judul, penulis, or kata kunci ..."
            className="w-full cursor-not-allowed appearance-none bg-transparent p-[1px] text-gray-800 placeholder:text-xs placeholder:text-blue-600/40 focus:outline-none disabled:opacity-50"
            disabled
          />
        </form>
        {sessionStorage.getItem("token") ? (
          <Image
            src={shoppingBag}
            alt="Shopping Bag Icon"
            className="cursor-not-allowed opacity-50"
          />
        ) : (
          <div className="space-x-3">
            <LoginButton />
            <RegisterButton />
          </div>
        )}
      </div>
    </header>
  );
};
