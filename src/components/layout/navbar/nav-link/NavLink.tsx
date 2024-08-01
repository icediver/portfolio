import Link from "next/link";

export interface INavLink {
  path: string;
  title: string;
}

const NavLink = ({ path, title }: INavLink) => {
  return (
    <Link
      href={path}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
    >
      {title}
    </Link>
  );
};

export default NavLink;
