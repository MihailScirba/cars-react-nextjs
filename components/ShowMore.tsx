"use client";

import { ShowMoreProps } from "@/types";
import { useState } from "react";
import { useRouter } from "next/navigation";
import CustomButton from "./CustomButton";
import { updateSearchParams } from "@/utils";

const ShowMore = ({ allCars, limit }: ShowMoreProps) => {
  const router = useRouter();

  const handleClick = () => {
    if (allCars.length > limit) {
      const newPathName = updateSearchParams("limit", `${limit + 10}`);
      router.push(newPathName, { scroll: false });
    } else {
      alert("There is no more cars");
    }
  };

  return (
    <div>
      <CustomButton
        title="Show More"
        containerStyles="bg-primary-blue rounded-full text-white mt-8"
        handleClick={handleClick}
      />
    </div>
  );
};

export default ShowMore;
