import Image from "next/image";
import Link from "next/link";

export function BusinessInfo() {
  return (
    <div className="hero p-20 bg-darkBrown text-offWhite">
      <div className="info">
        <h2 className="text-3xl">Thomas Burger</h2>
        <p>Location: 12125 Navy St LA CA 90066</p>
      </div>
      <div className="info">
        <div>
          <p>Mon - Friday 8:00 AM - 10:00 PM</p>
          <p>Sat - Sunday 8:00 AM - 10:00 PM</p>
        </div>
        <div className="flex flex-row justify-around">
          <Link href="#">
            {" "}
            <button className="bg-orange roundBtn m-5">Get In Touch</button>
          </Link>
          <div className="flex flex-row bg-brownOrange">
            <Link href="#">
              <Image
                src="/images/burgerCloseUp.png"
                height={50}
                width={50}
                alt="FB"
              />
            </Link>
            <Link href="#">
              <Image
                src="/images/burgerCloseUp.png"
                height={50}
                width={50}
                alt="IG"
              />
            </Link>
            <Link href="#">
              <Image
                src="/images/burgerCloseUp.png"
                height={50}
                width={50}
                alt="LI"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
