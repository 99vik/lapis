import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="border-t justify-center grid sm:grid-cols-2 bg-zinc-950 gap-8 sm:gap-4 px-4 sm:px-10 md:px-20 py-4 text-sm">
      <div className="flex flex-col text-zinc-400 items-start gap-1 justify-start h-full">
        <div className="flex items-start gap-2">
          <Image src="/logo.png" width={20} height={20} alt="Logo" />
          <p className="font-semibold text-white text">LAPIS</p>
        </div>
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
      <div className="flex flex-col text-zinc-400 sm:items-end justify-start gap-1 h-full">
        <p className="text-white font-semibold">CONTACT</p>
        <p>example1@email.com</p>
        <p>+385 123 4567</p>
      </div>
    </footer>
  );
}
