import { Inter } from "next/font/google";
import MainForm from "@/components/MainForm";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <MainForm />
    </div>
  );
}
