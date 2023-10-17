import Image from "next/image";

export function SpecialItem(props) {
    console.log(props)
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
        {/* TDL- make svg work */}
        <button className="roundBtn bg-['misc/Arrow.svg')]">Arrow</button>
      </div>
    </div>
  );
}
