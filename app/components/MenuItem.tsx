import Image from "next/image";
import Link from "next/link";

type MenuItemProps = {
  picture: string;
  name: string;
  color?: string;
  alt?: string;
};

export function MenuItem(props: MenuItemProps) {
  const { picture, name, color, alt } = props;
  return (
    <div style={{ backgroundColor: color ?? "" }}>
      <div className="special items-center h-1/3 w-full">
        <Link href="#">
          <div>
            <Image
              src={picture}
              // TDL- want to figure out what needs to happen for fill
              width={50}
              height={50}
              alt={alt ?? ""}
            />
          </div>
          <button>{name}</button>
        </Link>
      </div>
    </div>
  );
}
