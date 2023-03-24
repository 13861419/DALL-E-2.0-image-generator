import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="flex p-5 sticky top-0 bg-white z-50 shadow-md justify-between items-center">
      <div className="flex space-x-2 items-center">
        <Image
          src="https://links.papareact.com/4t3"
          alt="logo"
          height={30}
          width={30}
        />
        <div>
          <h1 className="font-bold">
            <span className="text-violet-500">AI</span> Image Generator
          </h1>
          <h2 className="text-xs">
            Powered by DALL-E 2.0, Chat GPT & Microsoft Azure!
          </h2>
        </div>
      </div>
      <div className="flex text-sm md:text-md divide-x items-center text-gray-500">
        <Link
          href="https://www.ashirwadshetye.com"
          rel="_norefferer"
          target="_blank"
          className="px-2 font-light text-right"
        >
          Ashirwad Shetye
        </Link>
        <Link
          href="https://github.com/Ashirwad-Shetye/DALL-E-2.0-image-generator"
          rel="_norefferer"
          target="_blank"
          className="px-2 font-light"
        >
          GitHub Repo
        </Link>
      </div>
    </header>
  );
}

export default Header;
