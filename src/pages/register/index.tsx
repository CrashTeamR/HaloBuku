import { useState } from "react";
import SubmitButton from "../../components/submit-button";
import axios from "axios";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";

export default function Register() {
  const router = useRouter();

  const [payload, setPayload] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    switch (name) {
      case "name":
        setPayload({ ...payload, name: value });
        break;
      case "email":
        setPayload({ ...payload, email: value });
        break;
      case "password":
        setPayload({ ...payload, password: value });
        break;
      default:
        return payload;
    }
  };

  const onSubmitHandler = async (e) => {
    try {
      setIsLoading(true);
      e.preventDefault();
      const req = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/register`,
        payload
      );
      if (req.status === 201) router.push("/verify");
    } catch (error) {
      console.log(error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Daftar | Halo Buku</title>
      </Head>

      <section className="flex h-screen w-full items-center justify-center p-8">
        <div className="relative flex flex-col gap-8 rounded-lg bg-white  p-[2rem_3rem] shadow-xl lg:w-[30%] xl:w-[28%] 2xl:w-[25%]">
          <Link href="/">
            <a className="absolute right-2 top-2 inline-block w-6 rounded-full text-center hover:bg-red-300">
              X
            </a>
          </Link>
          <h1 className="text-center text-2xl font-semibold">Daftar</h1>
          <form className="max-w-sm space-y-5" onSubmit={onSubmitHandler}>
            <div className="flex flex-col gap-2">
              <label htmlFor="name">Nama Lengkap</label>
              <input
                type="text"
                name="name"
                id="name"
                className="border-b border-gray-400/60 outline-none"
                onChange={onChangeHandler}
                placeholder="Masukkan nama lengkap"
                value={payload.name}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Masukkan email"
                className="border-b border-gray-400/60 outline-none"
                onChange={onChangeHandler}
                value={payload.email}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Masukkan password"
                className="border-b border-gray-400/60 outline-none"
                onChange={onChangeHandler}
                value={payload.password}
              />
            </div>
            <div className="flex justify-center">
              <SubmitButton isError={isError} isLoading={isLoading}>
                Daftar
              </SubmitButton>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
