import Link from "next/link";
import Image from "next/image";
import { HiOutlineLockClosed } from "react-icons/hi";
import { MdVpnKey } from "react-icons/md";

export default function LoginForm() {
  return (
    <>
      <div className="px-4">
        <form className="flex flex-col gap-2 px-4 py-10 justify-center m-auto max-w-lg border rounded-3xl h-80">
          <HiOutlineLockClosed size={24} className="items-center m-auto" />
          <input
            className="border border-slate-500 px-4 py-3 rounded-xl text-md m-auto w-full"
            placeholder="Username"
            type="text"
          />
          <div className="flex flex-row">
            <input
              className="border border-slate-500 px-4 py-3 rounded-xl m-auto w-full"
              placeholder="Password"
              type="password"
            />
          </div>

          <Link className="flex items-start" href={""}>
            J&rsquo;ai perdu ma clé
          </Link>
          <button className="bg-black text-white px-4 py-3 mt-2 rounded-full text-md">
            Déverouiller
          </button>
        </form>
      </div>
      {/* <div>Hello World Yann</div> */}
    </>
  );
}
