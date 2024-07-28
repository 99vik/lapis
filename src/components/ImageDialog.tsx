import { Dialog, DialogContent } from '@/components/ui/dialog';
import Image, { StaticImageData } from 'next/image';
import { Dispatch, SetStateAction } from 'react';

export function ImageDialog({
  open,
  setModalOpen,
  image,
}: {
  open: boolean;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  image: StaticImageData | undefined;
}) {
  if (!image) return;

  return (
    <Dialog open={open} onOpenChange={() => setModalOpen(false)}>
      <DialogContent className="rounded-lg w-[95vw] h-[60vh] sm:w-[85vw] sm:h-[80vh]">
        <Image
          placeholder="empty"
          fill={true}
          className="object-scale-down my-auto max-h-[95%]"
          alt=""
          quality={100}
          src={image}
        />
      </DialogContent>
    </Dialog>
  );
}
