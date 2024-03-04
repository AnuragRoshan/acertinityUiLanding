import React from "react";
import Link from "next/link";
// import Logo from "./Logo";
// import Button from "./Button";

const Navbar = () => {
  return (
    <>
      <div className="w-full h-20 bg-transparent fixed top-0 z-10">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-center items-center h-full ">
            {/* <Logo /> */}
            <ul className="hidden md:flex gap-x-6 text-gray-300 font-bold text-lg">
              <li>
                <Link href="/about">
                  <p>About Us</p>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <p>Services</p>
                </Link>
              </li>
              <li>
                <Link href="/contacts">
                  <p>Contacts</p>
                </Link>
              </li>
            </ul>
            {/* <Button /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
