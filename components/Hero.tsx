"use client";
import React from "react";
import CustomButton from "./CustomButton";

const Hero = () => {
    const handleScroll = () => {
        alert('Hello world') 
    };
    return (
        <div className="hero">
            <div className="flex-1 pt-36 padding-x">
                {/* Title */}
                <h1 className="hero__title">
                    Find, Book, or Rent a car - quickly and easily
                </h1>
                {/* Subtitle */}
                <p className="hero__subtitle">
                    Streamline your car rental experience with our effortless
                    booking process.
                </p>

                <CustomButton
                    title="Explore Cars"
                    containerStyles="bg-primary-blue text-white rounded-full mt-11"
                    handleClick={handleScroll}
                />
            </div>
        </div>
    );
};

export default Hero;
