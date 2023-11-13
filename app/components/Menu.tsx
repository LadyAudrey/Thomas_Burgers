import Image from "next/image";
import { MenuItem } from "./MenuItem";

export function Menu() {
  return (
    <div
      className="grid sm:grid-cols-2 lg:grid-cols-3 auto-rows-auto md:auto-rows-fr w-full"
      id="menu"
    >
      <div className="relative col-start-1 row-start-1 sm:col-span-2 md:col-span-1 md:row-span-2 lg:row-span-3 h-auto">
        <Image
          src={"/images/chillBG.png"}
          // TDL- I think this picture should be a different burger one. also, they put most of the burgers on the left hand side. I don't know if that's intentional, but if it's not I'd like to vary it a little on the bottom div
          width={895}
          height={750}
          alt=""
          className="h-full w-full overflow-hidden object-cover"
        />
        <h2 className="absolute bottom-5 left-1/2 -translate-x-1/2 text-4xl md:text-6xl whitespace-nowrap text-white">
          Order now!
        </h2>
      </div>
      <MenuItem
        picture={"/images/chillNoBG.png"}
        name={"Burgers"}
        color={"blue1"}
      />
      <MenuItem
        picture={"/images/ComboNoBG.png"}
        name={"Combos"}
        color={"orange"}
      />
      <MenuItem
        picture={"/images/sodaNoBG.png"}
        name={"Drinks"}
        color={"offWhite"}
      />
      <MenuItem
        picture={"/images/friesNoBG.png"}
        name={"Side Orders"}
        color={"brownOrange"}
      />
      <MenuItem
        picture={"/images/PancakesNoBG.png"}
        name={"Breakfast"}
        color={"orange"}
      />
      <MenuItem
        picture={"/images/nuggetsNoBG.png"}
        name={"Kids Menu"}
        color={"blue1"}
      />
    </div>
  );
}
