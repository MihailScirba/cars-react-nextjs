import { CarProps } from "@/types";
import cars from "@/cars.json";

export async function fetchCars() {
  return cars;
}

export const calculateRent = (city_mpg: number, year: number): string => {
  const basePricePerDay = 50;
  const mileageFactor = 0.1;
  const ageFactor = 0.05;

  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  const reantalRatePerDay = basePricePerDay + mileageRate + ageRate;
  return reantalRatePerDay.toFixed(0);
};

export const generateCarImageUrl = (car: CarProps, angle?: string): string => {
  const url = new URL("https://cdn.imagin.studio/getimage");
  const { make, year, model } = car;
  url.searchParams.append("customer", "img");
  url.searchParams.append("make", make);
  url.searchParams.append("modelFamily", model.split(' ')[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", `${year}`);
  url.searchParams.append("angle", `${angle}`);
  
  return `${url}`
};
