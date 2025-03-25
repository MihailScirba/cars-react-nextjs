"use client";

import { ShowMoreProps } from "@/types";
import { useState } from "react";
import { useRouter } from "next/navigation";
import CustomButton from "./CustomButton";
import { updateSearchParams } from "@/utils";

const Pagination = ({ allCars, limit }: ShowMoreProps) => {
  const router = useRouter();

  const handleShowMore = () => {
    if (allCars.length > limit) {
      const newPathName = updateSearchParams("limit", `${limit + 10}`);
      router.push(newPathName, { scroll: false });
    } else {
      alert("There is no more cars");
    }
  };

  const handleColapse = () => {
    const url = new URL(window.location.href);
    url.searchParams.delete("limit");
    router.push(url.pathname, { scroll: false });
  };

  return (
    <div className="flex gap-7 justify-center">
      <CustomButton
        title="Show More"
        containerStyles="bg-primary-blue rounded-full text-white mt-8 w-[200px]"
        handleClick={handleShowMore}
      />
      <CustomButton
        title="Colapse"
        containerStyles="bg-primary-blue rounded-full text-white mt-8 w-[200px]"
        handleClick={handleColapse}
      />
    </div>
  );
};

export default Pagination;
