"use client";

import { CarDetailsProps } from "@/types";
import { Fragment } from "react";
import Image from "next/image";
import { Transition, Dialog, TransitionChild } from "@headlessui/react";

const CarDetails = ({ isOpen, closeModal, car }: CarDetailsProps) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-[rgba(0,0,0,0.25)]" />
          </TransitionChild>
        </Dialog>
      </Transition>
    </>
  );
};

export default CarDetails;
