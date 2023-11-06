import Image from "next/image";

import { SpecialItem } from "./SpecialItem";

export function Specials() {
  return (
    <div
      id="specials"
      className="flex flex-wrap px-8 items-center gap-8 justify-around my-8 xl:my-20"
    >
      <SpecialItem
        picture={"/images/chillBG.png"}
        title={"Burger & Combo Specials"}
      />
      <SpecialItem
        picture={"/images/ringsBasket.png"}
        title={"Burger & Combo Specials"}
      />
      <SpecialItem
        picture={"/images/pancakesBG.png"}
        title={"Burger & Combo Specials"}
      />
    </div>
  );
}
