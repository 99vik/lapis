import ProjectImageCarousel from '@/components/projects/ProjectsImageCarousel';
import img0 from '@/../public/projectExp.jpg';
import img1 from '@/../public/projects/amicorc/1.jpg';
import img2 from '@/../public/projects/amicorc/2.jpg';

export default function Page() {
  const images = [img2.src, img1.src];

  return (
    <>
      <ProjectImageCarousel images={images} />
      <p>
        Maecenas ac lacus mauris. Mauris egestas leo ut sollicitudin vehicula.
        Vestibulum ut lorem vitae nibh interdum hendrerit et imperdiet mauris.
        Quisque varius nisl id consectetur eleifend. Maecenas vitae fermentum
        nunc. Donec nec risus lobortis, vulputate nisi in, posuere ligula. Nunc
        auctor sodales varius. Class aptent taciti sociosqu ad litora torquent
        per conubia nostra, per inceptos himenaeos.
      </p>
    </>
  );
}
