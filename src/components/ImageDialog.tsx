import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import Image from 'next/image';
import { Dispatch, SetStateAction } from 'react';

export function ImageDialog({
  open,
  setModalOpen,
  image,
}: {
  open: boolean;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  image: string | undefined;
}) {
  if (!image) return;

  return (
    <Dialog open={open} onOpenChange={() => setModalOpen(false)}>
      <DialogContent className="flex p-2 sm:p-6 justify-center rounded-lg items-center w-[95vw] h-[90vh] sm:w-[85vw] sm:h-[80vh]">
        <Image
          height={1308}
          width={1168}
          className="object-center h-full w-full rounded-xl object-scale-down"
          alt="gallery"
          src={image}
        />
      </DialogContent>
    </Dialog>
  );
}
