import Image from "next/image";

export default function Header() {
  return (
    <>
      <header className="flex flex-row justify-between bg-orange">
        <div className="flex flex-row justify-around w-1/2">
          <button>Menu</button>
          <button>Specials</button>
          <button>Location</button>
        </div>
        <div className="flex flex-row justify-center w-1/2">
          <button>Start Order Here!</button>
          <div className="h-1/4 w-1/4 mx-6">
            <Image
              src={"/misc/chillNoBG.png"}
              // TDL- want to figure out what needs to happen for fill
              width={50}
              height={50}
              alt=""
            />
          </div>
        </div>
      </header>
    </>
  );
}
