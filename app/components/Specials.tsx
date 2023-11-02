import Image from "next/image";

import { SpecialItem } from "./SpecialItem";

export function Specials() {
  return (
    <div>
      <div id="specials" className="hero justify-between my-20">
        <SpecialItem
          picture={"/misc/chillBG.png"}
          title={"Burger & Combo Specials"}
        />
        <SpecialItem
          picture={"/misc/ringsBasket.png"}
          title={"Burger & Combo Specials"}
        />
        <SpecialItem
          picture={"/misc/pancakesBG.png"}
          title={"Burger & Combo Specials"}
        />
      </div>
    </div>
  );
}
