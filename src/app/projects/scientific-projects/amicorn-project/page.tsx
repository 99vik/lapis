import ProjectImageCarousel from '@/components/projects/ProjectsImageCarousel';
import { EvervaultCard } from '@/components/ui/evervault-card';
import Link from 'next/link';
import img1 from '@/../public/projects/amicorn/1.jpg';
import img2 from '@/../public/projects/amicorn/2.jpg';
import img3 from '@/../public/projects/amicorn/3.jpg';
import img4 from '@/../public/projects/amicorn/4.jpg';
import img0 from '@/../public/projectExp.jpg';

export default function Page() {
  const images = [img0.src, img1.src, img2.src, img3.src, img4.src];

  return (
    <>
      <ProjectImageCarousel images={images} />
      <p>
        Maecenas ac lacus mauris. Mauris egestas leo ut sollicitudin vehicula.
        Nulla elementum dui metus, in volutpat massa bibendum eu. Cras feugiat
        cursus velit, et euismod arcu blandit ac. Vestibulum ut lorem vitae nibh
        interdum hendrerit et imperdiet mauris. Quisque varius nisl id
        consectetur eleifend. Maecenas vitae fermentum nunc. Donec nec risus
        lobortis, vulputate nisi in, posuere ligula. Nunc auctor sodales varius.
        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
        inceptos himenaeos.
      </p>
      <p>
        Maecenas ac lacus mauris. Mauris egestas leo ut sollicitudin vehicula.
        Nulla elementum dui metus, in volutpat massa bibendum eu. Cras feugiat
        cursus velit, et euismod arcu blandit ac. Vestibulum ut lorem vitae nibh
        interdum hendrerit et imperdiet mauris. Quisque varius nisl id
        consectetur eleifend. Maecenas vitae fermentum nunc. Donec nec risus
        lobortis, vulputate nisi in, posuere ligula. Nunc auctor sodales varius.
        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
        inceptos himenaeos.
      </p>
      <div className="border hover:border-white/40 hover:shadow-[0_0px_20px_10px_rgba(255,255,255,0.2)] transition rounded-3xl overflow-hidden flex flex-col items-start max-w-sm mx-auto relative h-[200px] aspect-square">
        <Link href="/" className="w-full">
          <EvervaultCard text="PLEA" />
        </Link>
      </div>
      <p className="text-sm text-center text-zinc-200 -mt-5">
        Interact with PLEA
      </p>
      <p>
        Maecenas ac lacus mauris. Mauris egestas leo ut sollicitudin vehicula.
        Nulla elementum dui metus, in volutpat massa bibendum eu. Cras feugiat
        cursus velit, et euismod arcu blandit ac. Vestibulum ut lorem vitae nibh
        interdum hendrerit et imperdiet mauris. Quisque varius nisl id
        consectetur eleifend. Maecenas vitae fermentum nunc. Donec nec risus
        lobortis, vulputate nisi in, posuere ligula. Nunc auctor sodales varius.
        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
        inceptos himenaeos.
      </p>
    </>
  );
}
