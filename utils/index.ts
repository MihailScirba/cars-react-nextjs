import { CarProps } from "@/types";

export async function fetchCars() {
  const headers = {
    "x-rapidapi-key": "20acd09aaemsh5a59a8f253d6944p1b06e2jsn13ccc0e635bb",
    "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=r8",
    { headers: headers }
  );

  const result = await response.json();
  return result;
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
  url.searchParams.append("modelFamily", model.split("")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", `${year}`);
  url.searchParams.append("angle", `${angle}`);
  
  return `${url}`
};
