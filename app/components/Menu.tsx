import Image from "next/image";

export default function Menu() {
  return (
    <div className="hero">
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
        <div className="special items-center bg-orange h-1/3 w-full">
          <div>
            <Image
              src={"/misc/chillNoBG.png"}
              // TDL- want to figure out what needs to happen for fill
              width={50}
              height={50}
              alt=""
            />
          </div>
          <button>Burgers</button>
        </div>
        <div className="special w-full items-center bg-blue1 h-1/3">
          <div>
            <div>
              <Image
                src={"/misc/sodaNoBG.png"}
                // TDL- want to figure out what needs to happen for fill
                width={50}
                height={50}
                alt=""
              />
            </div>
            <button>Drinks</button>
          </div>
        </div>
        <div className="special w-full items-center bg-blue-2 h-1/3">
          <div>
            <div>
              <Image
                src={"/misc/friesNoBG.png"}
                // TDL- want to figure out what needs to happen for fill
                width={50}
                height={50}
                alt=""
              />
            </div>
            <button>Side Orders</button>
          </div>
        </div>
      </div>
      <div className="special bg-darkBrown">
        <div className="special items-center bg-offWhite h-1/3 w-full">
          <div className="special items-center bg-orange h-1/3 w-full">
            <div>
              <Image
                src={"/misc/ComboNoBG.png"}
                // TDL- want to figure out what needs to happen for fill
                width={50}
                height={50}
                alt=""
              />
            </div>
            <button>Combos</button>
          </div>
          <div className="special w-full items-center bg-blue1 h-1/3">
            <div>
              <div>
                <Image
                  src={"/misc/sodaNoBG.png"}
                  // TDL- want to figure out what needs to happen for fill
                  width={50}
                  height={50}
                  alt=""
                />
              </div>
              <button>Drinks</button>
            </div>
          </div>
          <div className="special w-full items-center bg-blue-2 h-1/3">
            <div>
              <div>
                <Image
                  src={"/misc/friesNoBG.png"}
                  // TDL- want to figure out what needs to happen for fill
                  width={50}
                  height={50}
                  alt=""
                />
              </div>
              <button>Side Orders</button>
            </div>
            b
          </div>
        </div>
      </div>
    </div>
  );
}
