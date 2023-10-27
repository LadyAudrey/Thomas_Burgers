import Image from "next/image";
import Link from "next/link";

type SpecialItem = {
  picture: string;
  title: string;
};

export function SpecialItem(props: SpecialItem) {
  const { picture, title } = props;
  return (
    <div className="special mx-5">
      <div>
        <Image
          src={picture}
          // TDL- want to figure out what needs to happen for fill
          width={400}
          height={400}
          alt=""
        />
      </div>
      <div className="specialBanner bg-brownOrange">
        <h3>{title}</h3>
        {/* TDL- make svg work and accept props of links*/}
        <Link href="#">
          <button className="roundBtn bg-['misc/Arrow.svg')]">Arrow</button>
        </Link>
      </div>
    </div>
  );
}
