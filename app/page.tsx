import {
  CarCard,
  CustomButton,
  CustomFilter,
  Hero,
  SearchBar,
} from "@/components";
import Pagination from "@/components/Pagination";
import { fuels, yearsOfProduction } from "@/constants";
import { FilterProps } from "@/types";
import { fetchCars } from "@/utils";
import Image from "next/image";

export default async function Home({
  searchParams,
}: {
  searchParams: FilterProps;
}) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: Number(searchParams.year) || undefined,
    fuel: searchParams.fuel || "",
    model: searchParams.model || "",
  });

  const paginatedCars = allCars.slice(0, Number(searchParams.limit) || 10);

  const isDataEmpty = allCars.length < 1 || !Array.isArray(allCars) || !allCars;

  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>explore the cars you might like</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} />
          </div>
        </div>
        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {paginatedCars?.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
            <Pagination allCars={allCars} limit={Number(searchParams.limit) || 10} />
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Ooops, no results</h2>
          </div>
        )}
      </div>
    </main>
  );
}
