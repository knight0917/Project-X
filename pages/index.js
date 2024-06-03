import { Inter } from "next/font/google";
import MainForm from "@/components/MainForm";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <MainForm />
    </div>
  );
}
