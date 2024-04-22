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
      <DialogContent className="sm:max-w-[425px]">
        <p>asd</p>
        <Image height={1308} width={1168} alt="gallery" src={image} />
      </DialogContent>
    </Dialog>
  );
}
