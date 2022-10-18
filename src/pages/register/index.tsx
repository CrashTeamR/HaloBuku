import { useState } from "react";
import SubmitButton from "../../components/submit-button";
import axios from "axios";
import { useRouter } from "next/router";

type Position = {
  location: string;
};

export default function Register() {
  const router = useRouter();

  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    switch (name) {
      case "name":
        setInput({ ...input, name: value });
        break;
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

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const payload = { ...input };
    try {
      const req = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/register`,
        payload
      );
      if (req.status === 201) router.push("/verify");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] space-y-5 rounded-lg bg-white p-[2rem_3rem]">
      <h1 className="text-center text-2xl font-semibold uppercase">Register</h1>
      <form className="max-w-sm space-y-5" onSubmit={onSubmitHandler}>
        <div className="flex justify-between space-x-3">
          <label htmlFor="name">Full Name: </label>
          <input
            type="text"
            name="name"
            id="name"
            className="border-b border-gray-400/60 outline-none"
            onChange={onChangeHandler}
            value={input.name}
          />
        </div>
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
          <SubmitButton buttonText="Daftar" />
        </div>
      </form>
    </div>
  );
}
