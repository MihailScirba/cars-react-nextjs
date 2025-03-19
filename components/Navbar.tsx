import React from "react";
import Link from "next/link";
import Image from "next/image";
import CustomButton from "./CustomButton";

const Navbar = () => {
    const click = () => alert("Hello nav");
    return (
        <header className="w-full absolute z-10">
            <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-16 py-4">
                <Link href="/">
                    <Image
                        src="/logo.svg"
                        alt="logo"
                        width={118}
                        height={18}
                        className="object-contain"
                    />
                </Link>
                <CustomButton
                    title="Sign in"
                    containerStyles="text-primary-blue bg-white rounded-full"
                />
            </nav>
        </header>
    );
};

export default Navbar;
