import Image from "next/image";

function Footer() {
  return (
    <footer className="container mx-auto">
      Footer <Image src="/image/1.jpg" alt="icon" height={100} width={100} />
    </footer>
  );
}
export default Footer;
