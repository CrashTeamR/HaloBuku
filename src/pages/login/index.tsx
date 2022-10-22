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
    <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] space-y-5 rounded-lg bg-white p-[2rem_3rem]">
      <h1 className="text-center text-2xl font-semibold ">Masuk</h1>
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
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
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
  );
}
