import Image from "next/image";
import LandingPage from "../components/Navbar/Navbar";
import Landing from "@/components/Landing/Landing";

export default function Home() {
  return (
    <>
      <main className="w-[70%] mx-auto">
        <LandingPage  />
        <Landing />
      </main>
    </>
  );
}
