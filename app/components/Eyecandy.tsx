import Image from "next/image";

export function Eyecandy() {
  return (
    <div className="hidden md:flex justify-between gap-4 bg-darkBrown px-4 pb-4">
      <div>
        <Image
          src={"/images/burgerCloseUp.png"}
          // TDL- want to figure out what needs to happen for fill
          width={350}
          height={350}
          alt="hamburger"
          className="h-full w-full overflow-hidden object-cover"
        />
      </div>
      <div>
        <Image
          src={"/images/chillBG.png"}
          // TDL- want to figure out what needs to happen for fill
          width={350}
          height={350}
          alt="hamburger"
          className="h-full w-full overflow-hidden object-cover hidden lg:block"
        />
      </div>
      <div>
        <Image
          src={"/images/ringsBasket.png"}
          // TDL- want to figure out what needs to happen for fill
          width={350}
          height={350}
          alt="onion rings"
          className="h-full w-full overflow-hidden object-cover"
        />
      </div>
      <div>
        <Image
          src={"/images/pancakesBG.png"}
          // TDL- want to figure out what needs to happen for fill
          width={350}
          height={350}
          alt="pancakes"
          className="h-full w-full overflow-hidden object-cover"
        />
      </div>
    </div>
  );
}
