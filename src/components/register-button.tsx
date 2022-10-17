import Link from "next/link";

export default function RegisterButton() {
  return (
    <Link href="/register">
      <a className="rounded-lg bg-teal-400 p-[0.3rem_2rem] text-gray-800 shadow-lg">
        Register
      </a>
    </Link>
  );
}
