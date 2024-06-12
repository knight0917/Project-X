import { Inter } from "next/font/google";
import Link from "next/link";
import MainForm from "./main-form";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center ">

    <p className="my-6"> this site is all about knowing youself.</p>

      <nav>
        <ul>
          <li>
            <Link className="underline hover:bg-green-900" href="/main-form">
               Know your NUMEROLOGY
            </Link>
          </li>
          <li>
            <Link  className="underline hover:bg-green-900" href="/match-form">
              Match your NUMEROLOGY with your partner
            </Link>
          </li>
        </ul>
      </nav>
      <div>
        {/* <MainForm /> */}
      </div>
    </div>
  );
}
