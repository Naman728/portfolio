import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href="/"
      className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-primary text-2xl font-bold text-white no-underline"
    >
      N.
    </Link>
  );
};

export default Logo;
