import { useState } from "react";
import SubmitButton from "../../components/submit-button";
import axios from "axios";
import { useRouter } from "next/router";
import Head from "next/head";

export default function Verify() {
  const router = useRouter();

  const [input, setInput] = useState({
    email: "",
    otp: 0,
  });

  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
    try {
      setIsLoading(true);
      e.preventDefault();
      const payload: { email: string; otp: number } = { ...input };

      const req = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/verify`,
        payload
      );
      console.log(req);
      if (req.status === 200) router.push("/login");
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Verifikasi | Halo Buku</title>
      </Head>
      <section className="flex h-screen w-full items-center justify-center p-8">
        <div className="flex flex-col gap-8 rounded-lg bg-white  p-[2rem_3rem] shadow-xl lg:w-[30%] xl:w-[28%] 2xl:w-[25%]">
          <h1 className="text-center text-2xl font-semibold">Verifikasi</h1>
          <form className="max-w-sm space-y-5" onSubmit={onSubmitHandler}>
            <div className="flex flex-col gap-2">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                className="border-b border-gray-400/60 outline-none"
                onChange={onChangeHandler}
                value={input.email}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="otp">OTP</label>
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
              <SubmitButton isError={isError} isLoading={isLoading}>
                Verifikasi
              </SubmitButton>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
