import Link from "next/link";

export default function Custom404() {
  return (
    <div className="flex flex-col items-center">
      <p>Page not found</p>
      <u>
        <Link href="/">Go to home</Link>
      </u>
    </div>
  );
}
