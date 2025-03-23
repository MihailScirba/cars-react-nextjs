"use client";

import { CarDetailsProps } from "@/types";
import { Fragment } from "react";
import Image from "next/image";
import {
  Transition,
  Dialog,
  TransitionChild,
  DialogPanel,
} from "@headlessui/react";
import SimpleBar from "simplebar-react";
import { generateCarImageUrl } from "@/utils";

const CarDetails = ({ isOpen, closeModal, car }: CarDetailsProps) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          {/* Background color on backside of main panel  */}
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

          {/* Main  */}
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <DialogPanel className={"car-details__dialog-panel"}>
                  {/* Close button */}
                  <button
                    type="button"
                    onClick={closeModal}
                    className="car-details__close-btn"
                  >
                    <Image
                      src="/close.svg"
                      alt="close"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </button>

                  {/* images container */}
                  <div className="flex-1 flex flex-col gap-3">
                    {/* main image */}
                    <div className="relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg">
                      <Image
                        src={generateCarImageUrl(car, "")}
                        alt="car image"
                        fill
                        priority
                        className="object-contain"
                      />
                    </div>

                    {/* row of 3 additional images */}
                    <div className="flex gap-3">
                      <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                        <Image
                          src={generateCarImageUrl(car, "29")}
                          alt="car image"
                          fill
                          priority
                          className="object-contain"
                        />
                      </div>
                      <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                        <Image
                          src={generateCarImageUrl(car, "33")}
                          alt="car image"
                          fill
                          priority
                          className="object-contain"
                        />
                      </div>
                      <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                        <Image
                          src={generateCarImageUrl(car, "13")}
                          alt="car image"
                          fill
                          priority
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>

                  {/* car details container */}
                  <SimpleBar className="overflow-y-auto" autoHide={true} >
                    <div className="flex flex-col gap-2">
                      {/* Car's title - brand and model */}
                      <h2 className="font-semibold text-xl capitalize">
                        {car.make} {car.model}
                      </h2>

                      {/* Info container */}
                      <div className="mt-3 mr-5 flex flex-wrap gap-4">
                        {Object.entries(car).map(([key, value]) => (
                          <div
                            className="flex justify-between gap-5 w-full text-right"
                            key={key}
                          >
                            <h4 className="text-gray-500 capitalize">
                              {key.split("_").join(" ")}
                            </h4>
                            <p>{value}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </SimpleBar>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CarDetails;
