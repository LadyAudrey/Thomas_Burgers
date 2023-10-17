import Image from "next/image";

export function OpeningHero() {
  return (
    <div className="flex flex-row h-1/2 w-screen">
        <div className="flex flex-col items-center justify-center h-4/5 w-3/4 bg-lightBrown">
            <Image
              src={"/misc/flyingBurger.png"}
              // TDL- want to figure out what needs to happen for fill
              width={200}
              height={200}
              alt=""
            />
          </div>
          <div  className="flex flex-col  items-center justify-center h-4/5 w-3/4 bg-blue1">
            <div className="flex flex-col  items-center">
                <h1 className="text-6xl">Thomas Burger</h1>
                <h3 className="my-4">Ready to Order?</h3>
                <button className="bg-orange roundBtn">Order Now!</button>
            </div>
          </div>
    </div>
  );
}
