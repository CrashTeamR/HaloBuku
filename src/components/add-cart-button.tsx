import axios from "axios";
import { useState } from "react";

type props = {
  bookId: string;
};

export default function AddCartButton({ bookId }: props) {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleClick = async () => {
    try {
      setIsLoading(true);
      const token = localStorage.getItem("token");
      const req = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/cart/${bookId}`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log(req);
    } catch (error) {
      setIsError(true);
      console.error(error);
    } finally {
      setIsLoading(false);
      setIsError(false);
    }
  };

  return (
    <button
      type="button"
      className="flex w-max items-center rounded-md bg-blue-700 p-2 px-4 font-semibold text-white hover:brightness-[85%]"
      onClick={handleClick}
    >
      {isLoading && !isError && (
        <svg
          className="-ml-1 mr-3 h-5 w-5 animate-spin text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}
      Add to cart
    </button>
  );
}
