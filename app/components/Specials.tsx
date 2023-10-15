import Image from "next/image";
export function Specials() {
  return (
    <div>
      <div className="flex flex-row justify-center h-1/2 w-ful">
        <div className="flex flex-col">
          <div>
            <Image
              src={"/misc/chillBG.png"}
              // TDL- want to figure out what needs to happen for fill
              width={200}
              height={200}
              alt=""
            />
          </div>
          <div className="flex flex-row bg-brownOrange">
            <h3>Burger & Combo Specials</h3>
            <button className="roundBtn">arrow</button>
          </div>
        </div>
        <div className="flex flex-col">
          <div>
            <Image
              src={"/misc/chillBG.png"}
              // TDL- want to figure out what needs to happen for fill
              width={200}
              height={200}
              alt=""
            />
          </div>
          <div className="flex flex-row bg-brownOrange">
            <h3>Burger & Combo Specials</h3>
            <button className="roundBtn">arrow</button>
          </div>
        </div>
        <div className="flex flex-col">
          <div>
            <Image
              src={"/misc/chillBG.png"}
              // TDL- want to figure out what needs to happen for fill
              width={200}
              height={200}
              alt=""
            />
          </div>
          <div className="flex flex-row bg-brownOrange">
            <h3>Burger & Combo Specials</h3>
            <button className="roundBtn">arrow</button>
          </div>
        </div>
      </div>
    </div>
  );
}
