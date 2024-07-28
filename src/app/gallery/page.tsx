import img5 from '@/../public/img1.jpg';
import img8 from '@/../public/img3.jpg';
import img7 from '@/../public/img4.jpg';
import img0 from '@/../public/projectExp.jpg';
import img1 from '@/../public/projects/amicorc/1.jpg';
import img2 from '@/../public/projects/amicorc/2.jpg';
import img3 from '@/../public/projects/amicorc/3.jpg';
import img4 from '@/../public/projects/amicorc/4.jpg';
import img6 from '@/../public/studiesExp.jpg';
import DisplayedBreadcrumb from '@/components/breadcrumb';

import DisplayedImagesWithDialog from '@/components/DisplayedImagesWithDialog';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery',
};

export default function Page() {
  const images = [img0, img2, img3, img4, img1, img5, img6, img8, img7];

  return (
    <>
      <DisplayedBreadcrumb path={['Gallery']} />
      <DisplayedImagesWithDialog images={images} />
    </>
  );
}
