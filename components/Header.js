import Link from "next/link";
import { useRouter } from "next/router";

export default function Header({ children }) {

  return (
    <header className="bg-gray-100/60 border-b border-gray-200 sticky-header dark:bg-gray-800/60 dark:border-gray-800">
      <nav className="mx-auto max-w-4xl md:px-2 md:py-2">
        <div className="md:hidden">
        </div>
        <ul className="hidden justify-between w-full md:flex">
          <li className="mx-1 w-1/4">
            <Link  href="/main-form">
              Find Yours
            </Link>
          </li>
          <li className="mx-1 w-1/4">
            <Link href="/match-form">
              Match With Others
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}