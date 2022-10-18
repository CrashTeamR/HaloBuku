import { useState } from "react";
import SubmitButton from "../../components/submit-button";
import axios from "axios";
import { useRouter } from "next/router";

export default function Verify() {
  const router = useRouter();

  const [input, setInput] = useState({
    email: "",
    otp: 0,
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    switch (name) {
      case "email":
        setInput({ ...input, email: value });
        break;
      case "otp":
        setInput({ ...input, otp: parseInt(value) });
        break;
      default:
        return input;
    }
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const payload: { email: string; otp: number } = { ...input };
    try {
      const req = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/verify`,
        payload
      );
      console.log(req);
      if (req.status === 200) router.push("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] space-y-5 rounded-lg bg-white p-[2rem_3rem]">
      <h1 className="text-center text-2xl font-semibold uppercase">Register</h1>
      <form className="max-w-sm space-y-5" onSubmit={onSubmitHandler}>
        <div className="flex justify-between space-x-3">
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            id="email"
            className="border-b border-gray-400/60 outline-none"
            onChange={onChangeHandler}
            value={input.email}
          />
        </div>
        <div className="flex justify-between space-x-3">
          <label htmlFor="otp">OTP: </label>
          <input
            type="number"
            name="otp"
            id="otp"
            className="border-b border-gray-400/60 outline-none"
            onChange={onChangeHandler}
            value={input.otp}
          />
        </div>
        <div className="flex justify-center">
          <SubmitButton buttonText="Verifikasi" />
        </div>
      </form>
    </div>
  );
}
