import Image from "next/image";
import Link from "next/link";

export function OpeningHero() {
  return (
    <div className="hero flex flex-col sm:flex-row w-full">
      <div className="flex justify-center sm:w-1/2 bg-lightBrown">
        <Image
          src={"/misc/flyingBurger.png"}
          // TDL- want to figure out what needs to happen for fill
          width={200}
          height={200}
          alt=""
        />
      </div>
      <div className="flex flex-col  items-center justify-center sm:w-1/2 bg-blue1">
        <div className="flex flex-col  items-center">
          <h1 className="text-6xl text-center">Thomas Burger</h1>
          <Link href="#">
            <h3 className="my-4">Ready to Order?</h3>
          </Link>
          <button className="bg-orange roundBtn m-5">Order Now!</button>
        </div>
      </div>
    </div>
  );
}
