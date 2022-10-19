import {
  blueLogo,
  shoppingBag,
  searchIcon,
  menuIcon,
} from "../../public/images";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import LoginButton from "./login-button";
import RegisterButton from "./register-button";
import { useEffect, useState, useRef } from "react";

export const Header = () => {
  const router = useRouter();
  const [userToken, setUserToken] = useState("");
  const [open, setOpen] = useState(false);
  const searchRef = useRef(null);
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (event) => {
    setSearchValue(() => event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!searchValue) {
      return;
    }

    router.push({
      pathname: "/search",
      query: { q: searchValue },
    });

    searchRef.current.blur();
  };

  useEffect(() => {
    setUserToken(localStorage.getItem("token"));
  }, []);

  useEffect(() => {
    if (router.pathname === "/search") {
      router.push({
        pathname: "/search",
        query: { q: router.query?.q },
      });

      setSearchValue(router.query.q || "");
    }
  }, []);

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
        <form
          className="relative flex w-3/6 translate-x-10   items-center justify-between gap-2 rounded-lg bg-gray-100 py-2 px-5 outline outline-1 outline-blue-200"
          onSubmit={handleSubmit}
        >
          <label
            htmlFor="search-keyword"
            className="flex  items-center opacity-50"
          >
            <Image src={searchIcon} alt="Search Icon" width={24} height={24} />
          </label>
          <input
            type="search"
            name="search-keyword"
            id="search-keyword"
            placeholder="Telusuri judul, penulis, or kata kunci ..."
            className="w-full appearance-none bg-transparent p-[1px] text-gray-700 placeholder:text-xs placeholder:text-blue-600/40 focus:outline-none disabled:opacity-50"
            autoComplete="off"
            onChange={handleChange}
            value={searchValue}
            ref={searchRef}
          />
        </form>
        {userToken ? (
          <Image
            src={shoppingBag}
            alt="Shopping Bag Icon"
            className=" opacity-50"
          />
        ) : (
          <div className="hidden space-x-3 md:block">
            <LoginButton />
            <RegisterButton />
          </div>
        )}
        <div className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? (
            <div className="absolute top-[4rem] right-0 left-0 flex flex-col items-center justify-center gap-10 bg-gray-200 p-10">
              <div>
                <LoginButton />
              </div>
              <div>
                <RegisterButton />
              </div>
            </div>
          ) : (
            <div className="absolute top-[-10rem] right-0 left-0 flex flex-col items-center justify-center gap-10 bg-gray-200 p-10">
              <div>
                <LoginButton />
              </div>
              <div>
                <RegisterButton />
              </div>
            </div>
          )}
          <Image
            src={menuIcon}
            alt="Menu Icon"
            width={25}
            height={25}
            className="cursor-pointer"
          ></Image>
        </div>
      </div>
    </header>
  );
};
