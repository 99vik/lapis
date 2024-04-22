import ProjectImageCarousel from '@/components/projects/ProjectsImageCarousel';
import img0 from '@/../public/projectExp.jpg';
import img1 from '@/../public/projects/amicorn/1.jpg';
import img2 from '@/../public/projects/amicorn/2.jpg';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
};

export default function Page() {
  const images = [img1.src, img2.src, img0.src];

  return (
    <>
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
    </>
  );
}
