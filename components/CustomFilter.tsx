"use client";
import { Fragment, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
  Transition,
} from "@headlessui/react";
import { CustomFilterProps } from "@/types";
import { updateSearchParams } from "@/utils";

const CustomFilter = ({ title, options }: CustomFilterProps) => {
  const router = useRouter();

  const [selected, setSelected] = useState(options[0]);

  const handleUpdateParams = (e: { title: string; value: string }) => {
    const newPathName = updateSearchParams(title, e.value.toLowerCase());
    router.push(newPathName);
  };

  return (
    <div className="w-fit">
      <Listbox
        value={selected}
        onChange={(e) => {
          setSelected(e);
          handleUpdateParams(e);
        }}
      >
        <div className="relative w-fit z-10">
          <ListboxButton className={"custom-filter__btn"}>
            <span className="block truncate">{selected.title}</span>
            <Image
              src="/chevron-up-down.svg"
              alt="chevron"
              height={20}
              width={20}
              className="object-contain"
            />
          </ListboxButton>
          <Transition
            as={Fragment}
            enter={"ease-in duration-200"}
            enterFrom={"opacity-0"}
            enterTo={"opacity-100"}
            leave={"ease-out duration-200"}
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <ListboxOptions className={"custom-filter__options"}>
              {options.map((option) => (
                <ListboxOption
                  key={option.title}
                  value={option}
                  className={({
                    active,
                  }: {
                    active: boolean;
                  }) => `realative cursor-pointer select-none text-gray-900
                    py-2 px-4 hover:bg-gray-300 hover:text-gray-900 
                    transition:ease duration-150 
                    ${active ? "bg-primary-blue text-white" : "text-gray-900"}`}
                >
                  {({ selected }) => (
                    <span
                      className={`block truncate ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      {option.title}
                    </span>
                  )}
                </ListboxOption>
              ))}
            </ListboxOptions>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default CustomFilter;
