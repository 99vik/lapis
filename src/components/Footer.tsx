export default function Footer() {
  return (
    <footer className="border-t grid grid-cols-3 bg-zinc-950 gap-4 text-center px-20 py-4 text-sm">
      <div className="flex flex-col text-zinc-400 items-center  gap-1 justify-start h-full">
        <p className="text-white font-semibold">LAPIS</p>
        <p>
          Faculty of Mechanical Engineering and Naval Architecture, University
          of Zagreb
        </p>
      </div>
      <div className="flex flex-col text-zinc-400 items-center  justify-start gap-1 h-full">
        <p className="text-white font-semibold">FIND US</p>
        <p>Ivana Lučića 5 ,10000 Zagreb</p>
      </div>
      <div className="flex flex-col text-zinc-400 items-center  justify-start gap-1 h-full">
        <p className="text-white font-semibold">CONTACT</p>
        <p>example1@email.com</p>
        <p>example2@email.com</p>
      </div>
    </footer>
  );
}
