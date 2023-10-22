import Image from "next/image";
import Link from "next/link";
import { MobileHeader } from "./MobileHeader"

export default function Header() {
  return (
    <>
      <header className="sm:flex justify-between hidden bg-orange">
        <div className="flex justify-around items-center w-1/2">
          <Link href="#">
            {" "}
            <button>Menu</button>
          </Link>
          <Link href="#">
            {" "}
            <button>Specials</button>
          </Link>
          <Link href="#">
            {" "}
            <button>Location</button>
          </Link>
        </div>
        <div className="flex flex-row justify-center w-1/2">
          <button>Start Order Here!</button>
          <div className="mx-6">
            <Link href="#" className="h-1/4 w-1/4">
              <Image
                src={"/misc/chillNoBG.png"}
                // TDL- want to figure out what needs to happen for fill
                height={50}
                width={50}
                alt="hamburger"
              />
            </Link>
          </div>
        </div>
      </header>
      <MobileHeader />
    </>
  );
}
