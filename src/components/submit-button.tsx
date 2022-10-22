import { useState } from "react";

type props = {
  buttonText: string;
};

export default function SubmitButton({ buttonText }: props) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked((prevCondition) => !prevCondition);
  };

  return (
    <button
      className="mt-4 flex rounded-lg bg-blue-400 p-[0.2rem_2rem] text-white shadow-lg hover:bg-blue-600 "
      onClick={handleClick}
    >
      <svg
        id={buttonText.toLowerCase()}
        className={`-ml-1 mr-3 ${
          !isClicked && "hidden"
        } h-5 w-5 animate-spin text-white`}
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
      {buttonText}
    </button>
  );
}
