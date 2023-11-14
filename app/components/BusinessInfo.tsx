import Image from "next/image";
import Link from "next/link";

export function BusinessInfo() {
  return (
    <div className="flex flex-col sm:flex-row items-center p-20 bg-darkBrown text-offWhite">
      <div className="flex flex-col h-1/2 w-1/2">
        <h2 className="text-3xl">
          Thomas
          <br />
          Burger
        </h2>
        <p className="pt-4 gap-4">
          Location:
          <br />
          12125 Navy St
          <br />
          LA CA 90066
        </p>
      </div>
      <div className="flex flex-col h-1/2 w-1/2 my-5 gap-4 whitespace-nowrap">
        <div>
          <p>Mon - Friday 8:00 AM - 10:00 PM</p>
          <p>Sat - Sunday 8:00 AM - 10:00 PM</p>
        </div>
        <div className="flex flex-col sm:flex-row justify-between">
          <Link href="#">
            {" "}
            <button className="bg-orange text-darkBrown roundBtn my-10">
              Get In Touch
            </button>
          </Link>
          <div className="flex flex-row gap-5">
            <Link href="#">
              <Image
                src="images/SocialMediaLogos/icons8-instagram.svg"
                height={50}
                width={50}
                alt="FB"
              />
            </Link>
            <Link href="#">
              <Image
                src="/images/SocialMediaLogos/icons8-twitter.svg"
                height={50}
                width={50}
                alt="IG"
              />
            </Link>
            <Link href="#">
              <Image
                src="/images/SocialMediaLogos/icons8-facebook.svg"
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
