import Link from "next/link";
import Image from "next/image";
import { TbWorld } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";

export default function Footer() {
  return (
    <>
      <nav className="pt-8 px-4 max-w-full flex items-center justify-between gap-8">
        {/* <Image src="logo-paynah-pro.svg" height={130} width={130} alt="" /> */}
        <div className="flex text-sm items-center gap-2">
          {" "}
          <TbWorld /> Français{" "}
          <span>
            {" "}
            <IoIosArrowDown />
          </span>
        </div>
        <div className="text-sm">
          Copyright © 2023 Paynah, Tous droits réservés |{" "}
          <span>Politique de confidentialité</span>
        </div>
      </nav>
      {/* <div>Hello World Yann</div> */}
    </>
  );
}
