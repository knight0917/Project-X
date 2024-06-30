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
        
        <Link href="/main-form" class="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group">
            <span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
            <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
            <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">click here</span>
            <span class="absolute inset-0 border-2 border-white rounded-full"></span>
        </Link>

      </nav>
      <div>
        {/* <MainForm /> */}
      </div>
    </div>
  );
}

