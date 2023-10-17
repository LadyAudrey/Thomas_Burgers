import Image from "next/image";

export function MenuItem(props) {
  const { picture, name, color, alt } = props;
  return (
    <div style={{backgroundColor: color}}>
        <div className="special items-center h-1/3 w-full">
      <div>
        <Image
          src={picture}
          // TDL- want to figure out what needs to happen for fill
          width={50}
          height={50}
          alt={""}
        />
      </div>
      <button>{name}</button>
    </div>
    </div>
  );
}
