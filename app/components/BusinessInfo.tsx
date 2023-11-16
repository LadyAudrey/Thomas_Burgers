import Image from "next/image";
import Link from "next/link";

export function BusinessInfo() {
  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-stretch p-10 bg-darkBrown text-offWhite">
      {/* Left side */}
      <div className="flex flex-col mb-2 text-center sm:text-start sm:w-1/2">
        <h2 className="text-3xl">Thomas Burger</h2>
        <p className="pt-4">
          Location:
          <br />
          12125 Navy St
          <br />
          LA CA 90066
        </p>
      </div>

      {/* Right side */}
      <div className="flex flex-col text-center sm:w-1/2 gap-4 whitespace-nowrap">
        <div className="flex flex-col md:flex-row md:justify-between">
          <p className="flex flex-col mb-2">
            Mon - Friday <span>8:00 AM - 10:00 PM</span>
          </p>
          <p className="flex flex-col">
            Sat - Sunday <span>8:00 AM - 10:00 PM</span>
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-between gap-5 items-center">
          <Link href="#" className="bg-orange text-darkBrown roundBtn my-5">
            Get In Touch
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
