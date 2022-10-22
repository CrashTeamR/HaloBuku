import Link from "next/link";

export default function LoginButton() {
  return (
    <Link href="/login">
      <a className="rounded-md bg-gray-50 px-8 py-2 shadow-lg hover:shadow-xl">
        Sign In
      </a>
    </Link>
  );
}
