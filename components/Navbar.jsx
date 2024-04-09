import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <>
      <nav className="px-32 md:px-12 py-12 items-start ">
        <Image src="logo-paynah-pro.svg" height={130} width={130} alt="" />
      </nav>
      {/* <div>Hello World Yann</div> */}
    </>
  );
}
