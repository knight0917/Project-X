import { Inter } from "next/font/google";
import Link from "next/link";
import MainForm from "./main-form";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center ">

    <p className="my-12 text-7xl "> this site is all about knowing youself.</p>
   {/* <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
     
      </div> */}
      <nav>
        <ul>
          <li>
            <Link className="  hover:overline" href="/main-form">
               know your numerology
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

