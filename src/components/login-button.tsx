import Link from "next/link";

export default function LoginButton() {
  return (
    <Link href="/signin">
      <a className="rounded-lg bg-gray-50 p-[0.3rem_2rem] shadow-lg">Sign In</a>
    </Link>
  );
}
