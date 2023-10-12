import React from "react";
import Image from "next/image";
type PortfolioProps = {
  title: string;
  img: string;
  stack: Array<string>;
  link: string;
};
function PortfolioProject({ title, img, stack, link }: PortfolioProps) {
  return (
    <div className="border-2 border-stone-800 rounded-md overflow-hidden">
      <Image
        src={img}
        alt="project image"
        className="w-full h-36 md:h-48 object-cover cursor-pointer"
      />
      <div className="w-full p-2">
        <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">
          {title}
        </h3>
        <p className="flex flex-wrap flex-row gap-2 items-center justify-start text-xs md:text-sm">
          {stack.map((item) => (
            <span
              className="inline-block px-2 py-1 font-semibold border-2 rounded-md border-stone-800"
              key={stack.indexOf(item)}
            >
              {item}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}

export default PortfolioProject;
