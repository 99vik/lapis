import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="border-t items-start text-center flex flex-col md:items-center md:flex-row justify-evenly gap-6 p-6 bg-zinc-950 text-sm text-muted-foreground">
      <div className="flex items-start gap-2">
        <Image src="/logo.png" width={20} height={20} alt="Logo" />
        <p>&copy; {new Date().getFullYear()} LAPIS</p>
      </div>
      <div className="flex flex-col items-start">
        <p className="text-white font-semibold">LOCATION</p>
        <p>
          <a href="https://www.fsb.unizg.hr/index.php?pocetna">
            Faculty of Mechanical Engineering and Naval Architecture
          </a>
        </p>
        <p>
          <a href="https://www.unizg.hr/">University of Zagreb </a>
        </p>
        <p>Ivana Lučića 5, 10000 Zagreb</p>
      </div>
      <div className="flex flex-col items-start">
        <p className="text-white font-semibold">CONTACT</p>
        <p>example1@email.com</p>
        <p>+385 123 4567</p>
      </div>
    </footer>
  );
}
