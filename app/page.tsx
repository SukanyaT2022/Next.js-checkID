import Image from "next/image";
import Welcome from "./welcome/page";
import NameHome from "./nameHomeFolder/page";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
     {/* <Welcome /> */}
  <NameHome/>
    </div>
  );
}
