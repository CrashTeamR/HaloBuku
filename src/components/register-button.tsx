import Link from "next/link";

export default function RegisterButton() {
  return (
    <Link href="/register">
      <a className="rounded-md bg-teal-400 px-8 py-2 text-gray-800 shadow-lg hover:shadow-xl">
        Register
      </a>
    </Link>
  );
}
