import Image from "next/image";

export function Eyecandy() {
  return (
    <div className="flex flex-row justify-between h-auto w-screen bg-darkBrown">
      <div>
        <Image
          src={"/images/burgerCloseUp.png"}
          // TDL- want to figure out what needs to happen for fill
          width={900}
          height={900}
          alt=""
        />
      </div>
      <div>
        <Image
          src={"/images/chillBG.png"}
          // TDL- want to figure out what needs to happen for fill
          width={900}
          height={900}
          alt=""
        />
      </div>
      <div>
        <Image
          src={"/images/ringsBasket.png"}
          // TDL- want to figure out what needs to happen for fill
          width={900}
          height={900}
          alt=""
        />
      </div>
      <div>
        <Image
          src={"/images/pancakesBG.png"}
          // TDL- want to figure out what needs to happen for fill
          width={900}
          height={900}
          alt=""
        />
      </div>
    </div>
  );
}
