import Image from "next/image";
import Link from "next/link";

type SpecialItem = {
  picture: string;
  title: string;
};

export function SpecialItem(props: SpecialItem) {
  const { picture, title } = props;
  return (
    <div className="flex flex-col h-96 w-96">
      <Image
        src={picture}
        // TDL- want to figure out what needs to happen for fill
        width={384}
        height={384}
        alt=""
        className="object-cover h-full w-full overflow-hidden"
      />
      <div className="flex flex-row rounded-b-lg justify-around place-items-center bg-brownOrange">
        <h3>{title}</h3>
        {/* TDL- make svg work and accept props of links*/}
        <Link href="#">
          <svg
            width="101"
            height="55"
            viewBox="0 0 101 55"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-15 h-8 my-2"
          >
            <path d="M0 27H90.5" stroke="#F0DFC8" stroke-width="8" />
            <path
              d="M99.8884 26.9984L52.444 50.8956L51.9383 4.13295L99.8884 26.9984Z"
              fill="#F0DFC8"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
