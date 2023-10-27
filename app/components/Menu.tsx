import Image from "next/image";
import { MenuItem } from "./MenuItem";

export function Menu() {
  return (
    <div className="hero" id="menu">
      <div className="special">
        <div>
          <Image
            src={"/misc/chillBG.png"}
            // TDL- I think this picture should be a different burger one. also, they put most of the burgers on the left hand side. I don't know if that's intentional, but if it's not I'd like to vary it a little on the bottom div
            width={1000}
            height={1000}
            alt=""
          />
        </div>
        <h2>Order now!</h2>
      </div>
      <div className="special">
        {/* TDL- need to figure out how to pass tailwind colors as props */}
        <MenuItem
          picture={"/misc/chillNoBG.png"}
          name={"Burgers"}
          color={"orange"}
        />
        <MenuItem
          picture={"/misc/sodaNoBG.png"}
          name={"Drinks"}
          color={"brownOrange"}
        />
        <MenuItem
          picture={"/misc/friesNoBG.png"}
          name={"Side Orders"}
          color={"blue1"}
        />
      </div>
      <div className="special">
        <MenuItem picture={"/misc/ComboNoBG.png"} name={"Combos"} />
        <MenuItem
          picture={"/misc/PancakesNoBG.png"}
          name={"Breakfast"}
          color={"blue1"}
        />
        <MenuItem
          picture={"/misc/nuggetsNoBG.png"}
          name={"Kids Menu"}
          color={"orange"}
        />
      </div>
    </div>
  );
}
