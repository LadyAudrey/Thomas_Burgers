import Image from "next/image";
import Link from "next/link";

type MenuItemProps = {
  picture: string;
  name: string;
  color?: string;
  alt?: string;
};

export function MenuItem(props: MenuItemProps) {
  const { picture, name, color = "orange", alt } = props;
  return (
    <div className={`w-full md:min-h-[250px] h-full bg-${color} py-5`}>
      <Link
        href="#"
        className="flex flex-col items-center justify-center h-full w-full"
      >
        <Image
          src={picture}
          // TDL- want to figure out what needs to happen for fill
          width={200}
          height={200}
          alt={alt ?? ""}
          className="my-auto w-auto h-[162px]"
        />
        <h2 className="text-3xl font-medium">{name}</h2>
      </Link>
    </div>
  );
}
