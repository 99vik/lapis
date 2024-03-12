import Link from 'next/link';
import { buttonVariants } from '../ui/button';
import Image from 'next/image';

export default function About() {
  return (
    <div className="grid mb-32 lg:grid-cols-2 md:flex-row gap-10 items-center px-4 sm:px-6 md:w-[80%] max-w-screen-2xl mx-auto">
      <div>
        <h2 className="text-2xl font-bold mb-2">About us</h2>
        <p className="mb-5 text-zinc-300">
          Maecenas ac leo ante. Maecenas a ligula leo. Aliquam eget venenatis
          risus. Donec eget ultrices augue. Ut sodales tortor sem, id suscipit
          massa tristique ut.
        </p>
        <Link className={buttonVariants()} href="/about">
          Learn more
        </Link>
      </div>
      <div className="ring-4 shadow-[0_0px_30px_15px_rgba(39,39,42,0.6)] ring-zinc-800 rounded-3xl">
        <Image
          src="/img1.jpg"
          className="w-full h-auto rounded-3xl"
          width={1280}
          height={853}
          alt="about us picture"
        />
      </div>
    </div>
  );
}
