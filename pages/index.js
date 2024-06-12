import { Inter } from "next/font/google";
import MainForm from "@/components/MainForm";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <nav>
        <ul>
          <li>
            <Link href="/MainForm" legacyBehavior>
               Know your numerology
            </Link>
          </li>
          <li>
            <Link href="/matchForm" legacyBehavior>
              Match your partner
            </Link>
          </li>
        </ul>
      </nav>
      <div>
        <MainForm />
      </div>
    </div>
  );
}
