import Image from "next/image";
import Navbar from "@/components/Navbar";
import LoginForm from "@/components/LoginForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="flex flex-col h-screen cover-img justify-center">
        <Navbar />
        <div className="text-center text-3xl my-8 font-semibold">Bonjour,</div>
        <LoginForm />
        <div className="text-center mt-8 font-semibold">Ouvrir mon compte</div>
        <Footer />
      </div>
    </>
  );
}
