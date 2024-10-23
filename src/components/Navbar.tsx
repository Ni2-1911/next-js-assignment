import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="nav-bar mt-4">
      <ul className="flex">
        <li className="m-2 page-link">
          <Link href="/">Home</Link>
        </li>
        <li className="m-2 page-link">
          <Link href="/following">Following</Link>
        </li>
        <li className="m-2 page-link">
          <Link href="/contact-us">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
}
