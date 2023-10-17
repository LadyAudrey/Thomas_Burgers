import Image from "next/image";
export function Specials() {
  return (
    <div>
      <div className="flex flex-row justify-between mx-10 h-1/2 w-ful">
        <div className="special">
          <div>
            <Image
              src={"/misc/chillBG.png"}
              // TDL- want to figure out what needs to happen for fill
              width={200}
              height={200}
              alt=""
            />
          </div>
          <div className="specialBanner bg-brownOrange">
            <h3>Burger & Combo Specials</h3>
            <button className="roundBtn">arrow</button>
          </div>
        </div>
        <div className="special">
          <div>
            <Image
              src={"/misc/ringsBasket.png"}
              // TDL- want to figure out what needs to happen for fill
              width={200}
              height={200}
              alt=""
            />
          </div>
          <div className="specialBanner bg-blue1">
            <h3>Burger & Combo Specials</h3>
            <button className="roundBtn">arrow</button>
          </div>
        </div>
        <div className="special">
          <div>
            <Image
              src={"/misc/pancakesBG.png"}
              // TDL- want to figure out what needs to happen for fill
              width={200}
              height={200}
              alt=""
            />
          </div>
          <div className="specialBanner bg-orange">
            <h3>Burger & Combo Specials</h3>
            <button className="roundBtn">arrow</button>
          </div>
        </div>
      </div>
    </div>
  );
}
