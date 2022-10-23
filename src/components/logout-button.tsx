import Link from "next/link";

export default function LogoutButton({ className }) {
  return (
    <Link href="/">
      <a
        className={`rounded-md bg-red-400 px-8 py-2 shadow-lg hover:shadow-xl ${className}`}
        onClick={() => {
          localStorage.clear();
        }}
      >
        Keluar
      </a>
    </Link>
  );
}
