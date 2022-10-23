import Image from "next/image";
import LogoutButton from "./logout-button";
import { searchIcon } from "../../public/images";
import { useRouter } from "next/router";
import { useRef, useState } from "react";

export default function HiddenMenu() {
  const router = useRouter();
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

  return (
    <div className="absolute top-[4rem] right-0 left-0 flex flex-col items-center justify-center gap-10 bg-gray-200 p-10">
      <LogoutButton className="" />
      <form
        className="flex items-center justify-between gap-2 rounded-lg bg-gray-100 py-2 px-5 outline outline-1 outline-blue-200"
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
    </div>
  );
}
