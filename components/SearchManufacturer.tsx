"use client";
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  Transition,
} from "@headlessui/react";
import { SearchManufacturerProps } from "@/types";
import { Fragment, useState } from "react";
import React from "react";
import Image from "next/image";
import { manufacturers } from "@/constants";
import SimpleBar from "simplebar-react";

const SearchManufacturer = ({
  manufacturer,
  setManufacturer,
}: SearchManufacturerProps) => {
  const [query, setQuery] = useState("");
  const filteredManufacturers =
    query === ""
      ? []
      : manufacturers.filter((item) =>
          item
            .toLowerCase()
            .replace("/s+/g", "")
            .includes(query.toLowerCase().replace("/s+/g", ""))
        );
  return (
    <div className="search-manufacturer">
      <Combobox value={manufacturer} onChange={setManufacturer}>
        <div className="relative w-full">
          <ComboboxButton className="absolute top-[14px]">
            <Image
              src="/car-logo.svg"
              alt="image"
              width={20}
              height={20}
              className="ml-4"
            />
          </ComboboxButton>
          <ComboboxInput
            className={`search-manufacturer__input`}
            placeholder="Vollkswagen"
            displayValue={(manufacturer: string) => manufacturer}
            onChange={(e) => setQuery(e.target.value)}
          />
          <SimpleBar className="overflow-y-auto" autoHide={true}>
            <Transition
              as={Fragment}
              leave={"transition ease-in duration-300"}
              leaveFrom={"opacity-100"}
              leaveTo={"opacity-0"}
              afterLeave={() => setQuery("")}
            >
              <ComboboxOptions className="absolute bg-amber-100 z-10 overflow-y-scroll max-h-56">
                {filteredManufacturers.map((item) => (
                  <ComboboxOption
                    key={item}
                    className={({ active }: { active: boolean }) =>
                      `relative search-manufacturer__option ${
                        active ? "bg-primary-blue text-white" : "text-gray-900"
                      }`
                    }
                    value={item}
                  >
                    {({
                      active,
                      selected,
                    }: {
                      active: boolean;
                      selected: boolean;
                    }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {item}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? "text-white" : "text-teal-600"
                            }`}
                          ></span>
                        ) : null}
                      </>
                    )}
                  </ComboboxOption>
                ))}
              </ComboboxOptions>
            </Transition>
          </SimpleBar>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;
