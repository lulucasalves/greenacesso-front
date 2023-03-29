import Image from "next/image";

export function Menu() {
  return (
    <nav className="menu">
      <Image src="./icons/rickandmorty.svg" width={264} height={80} alt={""} />
    </nav>
  );
}
