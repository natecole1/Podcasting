import React from 'react'
import { ModalProps } from '@/src/types'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";



const Modal = ({ textToClick, title, children}: ModalProps) => {
  return (
    <Dialog>
      <DialogTrigger>{textToClick}</DialogTrigger>
      <DialogContent className="text-white-1 bg-black-1 border-none w-3/4 h-1/2 p-4 overflow-auto no-scrollbar ">
          <DialogHeader>
            <DialogTitle className='text-gold-1 text-xl xl:text-2xl text-center'>{title}</DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <p className='gap-1 p-2'>{children}</p>
      </DialogContent>
    </Dialog>
  );
}

export default Modal