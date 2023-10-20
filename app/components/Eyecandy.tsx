import Image from "next/image";

export function Eyecandy() {
  return (
    <div className="flex flex-row justify-between h-auto w-screen bg-darkBrown">
      <div>
        <Image
          src={"/misc/burgerCloseUp.png"}
          // TDL- want to figure out what needs to happen for fill
          width={900}
          height={900}
          alt=""
        />
      </div>
      <div>
        <Image
          src={"/misc/chillBG.png"}
          // TDL- want to figure out what needs to happen for fill
          width={900}
          height={900}
          alt=""
        />
      </div>
      <div>
        <Image
          src={"/misc/ringsBasket.png"}
          // TDL- want to figure out what needs to happen for fill
          width={900}
          height={900}
          alt=""
        />
      </div>
      <div>
        <Image
          src={"/misc/pancakesBG.png"}
          // TDL- want to figure out what needs to happen for fill
          width={900}
          height={900}
          alt=""
        />
      </div>
    </div>
  );
}
