import { useState } from "react";
import SubmitButton from "../../components/submit-button";
import axios from "axios";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();

  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    switch (name) {
      case "email":
        setInput({ ...input, email: value });
        break;
      case "password":
        setInput({ ...input, password: value });
        break;
      default:
        return input;
    }
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    const payload = { ...input };

    try {
      const req = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/login`,
        payload
      );

      const { token } = req.data;
      localStorage.setItem("token", token);
      if (req.status === 200) router.push("/");
    } catch (error) {
      console.log(error);
      document.querySelector("#masuk").classList.add("hidden");
    }
  };

  return (
    <section className="flex h-screen w-full items-center justify-center p-8">
      <div className="flex flex-col gap-8 rounded-lg bg-white  p-[2rem_3rem] shadow-xl lg:w-[30%] xl:w-[28%] 2xl:w-[25%]">
        <h1 className="text-center text-2xl font-bold ">Masuk</h1>
        <form className="flex flex-col gap-8" onSubmit={onSubmitHandler}>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="font-semibold">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="border-b border-gray-400/60 outline-none"
              onChange={onChangeHandler}
              placeholder="Masukkan email"
              value={input.email}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="font-semibold">
              Password{" "}
            </label>
            <input
              type="password"
              name="password"
              placeholder="Masukkan password"
              id="password"
              className="border-b border-gray-400/60 outline-none"
              onChange={onChangeHandler}
              value={input.password}
            />
          </div>
          <div className="flex justify-center">
            <SubmitButton buttonText="Masuk" />
          </div>
        </form>
      </div>
    </section>
  );
}
