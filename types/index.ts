import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  btnType?: "button" | "submit";
  containerStyles: string;
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufactuer: string) => void;
}

export interface CarProps {
  id: number;
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface CarDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarProps;
}

export interface FilterProps {
  manufacturer: string;
  year: number | undefined;
  fuel: string;
  model: string;
  limit?: number;
}

export interface optionProps {
  title: string;
  value: string;
}

export interface CustomFilterProps {
  title: string;
  options: optionProps[];
}

export interface ShowMoreProps {
  allCars: CarProps[];
  limit: number;
}
