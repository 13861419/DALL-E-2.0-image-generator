"use client";

import Image from "next/image";
import useSWR from "swr";
import fetchImages from "../lib/fetchImages";

type ImageType = {
  name: string;
  url: string;
};

function Images() {
  const {
    data: images,
    isLoading,
    mutate: refreshImages,
    isValidating,
  } = useSWR("images", fetchImages, {
    revalidateOnFocus: false,
  });

  const myLoader = (imageSrc: any) => {
    return `${imageSrc}?w=800&q=75`;
  };

  return (
    <div>
      <button
        className="fixed bottom-10 right-10 bg-violet-400/90 text-white px-5 py-3 rounded-md 
      hover:bg-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-400 font-bold z-20"
        onClick={() => refreshImages(images)}
      >
        {!isLoading && isValidating ? "刷新中..." : "刷新图片"}
      </button>

      {isLoading && (
        <p className="animate-pulse text-center pb-7 font-extralight">
          加载 <span className="text-violet-400">AI</span> 生成图片中...
        </p>
      )}

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 px-0 md:px-10 pb-10">
        {images?.imageUrls?.map((image: ImageType, i: number) => (
          <div
            className={`relative cursor-help ${
              i === 0 && "md:col-span-2 md:row-span-2"
            } hover:scale-[103%] transition-transform duration-200 ease-in-out 
            
            `}
            key={image.name}
          >
            {/* create a white div that when hovered it appears */}
            <div className="absolute flex justify-center items-center w-full h-full bg-white opacity-0 hover:opacity-80 transition-opacity duration-200 z-10">
              <p className="text-center font-light text-lg p-5">
                {/* This removes the Timestamp and File extension */}
                {image.name.split("_").shift()?.toString().split(".").shift()}
              </p>
            </div>
            <Image
              loader={myLoader}
              src={image.url}
              alt=""
              unoptimized={true}
              height={800}
              width={800}
              className="w-full rounded-sm shadow-2xl drop-shadow-lg -z-10"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Images;
