import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <nav>
        <ul>
          <li>
            <Link href="/main-form">
               Know your numerology
            </Link>
          </li>
          <li>
            <Link href="/match-form">
              Match your partner
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
