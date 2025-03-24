"use client";
import { useState } from "react";
import Image from "next/image";
import { CarProps } from "@/types";
import CustomButton from "./CustomButton";
import { calculateRent, generateCarImageUrl } from "@/utils";
import CarDetails from "./CarDetails";

interface CarCardProps {
  car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
  const { city_mpg, year, make, model, transmission, drive } = car;
  const carRent = calculateRent(city_mpg, year);
  const [isOpen, setIsOpen] = useState(false);

  const setOpenOnTouchScreen = () => {
    setIsOpen(true);
  };

  return (
    <div
      className="car-card group"
      id="car-card"
      onTouchStart={setOpenOnTouchScreen}
    >
      {/* Header / title */}
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>

      {/* Price */}
      <p className="car-card__price">
        <span className="car-card__price-dollar">$</span>
        {carRent}
        <span className="car-card__price-day">/day</span>
      </p>

      {/* Main image */}
      <div className="car-card__image">
        <Image
          src={generateCarImageUrl(car)}
          alt="car image"
          fill
          priority
          className="object-contain"
        />
      </div>

      {/* Bottom group */}
      <div className="relative flex w-full mt-2">
        {/* Info */}
        <div className="car-card__icon-container">
          {/* Transmision icon */}
          <div className="car-card__icon">
            <Image
              src="/steering-wheel.svg"
              alt="wheel"
              width={20}
              height={20}
            />
            <p className="car-card__icon-text">
              {transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>

          {/* Tire icon */}
          <div className="car-card__icon">
            <Image src="/tire.svg" alt="tire" width={20} height={20} />
            <p className="car-card__icon-text">{drive.toUpperCase()}</p>
          </div>

          {/* Fuel icon */}
          <div className="car-card__icon">
            <Image src="/gas.svg" alt="mpg" width={20} height={20} />
            <p className="car-card__icon-text">{city_mpg} MPG</p>
          </div>
        </div>

        {/* Button */}
        <div className="car-card__btn-container">
          <CustomButton
            title="View More"
            containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
            textStyles="text-white text-leading-[17px] font-bold hover:text-gray-600"
            rightIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>

      {/* Car detail popup */}
      <CarDetails
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        car={car}
      />
    </div>
  );
};

export default CarCard;
