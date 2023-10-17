import Image from "next/image";
export function Specials() {
  return (
    <div>
      <div className="hero justify-between mb-20">
        <div className="special mx-5">
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
        <div className="special mx-5">
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
        <div className="special mx-5">
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
