"use client";
import Image from "next/image";
import Link from "next/link";

export interface IGalleryData {
    _id: string;
    imageUrl: string;
    title: string;
    slug: string;
}


const PopularStyles = ({ Data }:{Data:IGalleryData[]} ) => {
    return (
        <div className="mx-auto max-w-7xl mb-20 flex pl-4">
            <h1
                style={{ writingMode: 'vertical-rl' }}
                className="font-roboto font-normal text-[34px] leading-[39.84px] mb-20 md:pl-0 rotate-180 lg:rotate-0"
            >
                EXPLORE NEW AND POPULAR STYLES
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                {Data.length > 0 ? (
                    Data.map((item, index) => (
                        <Link key={item._id} href={`/shop/${item.slug}`}>
                            <div className={`transition duration-300 hover:scale-105 ${index === 0 ? "sm:row-span-2" : ""}`}>
                                <Image
                                    src={item.imageUrl}
                                    alt={item.title}
                                    className="w-full h-full object-cover rounded-lg shadow-lg hover:shadow-xl"
                                    width={500}
                                    height={500}
                                    priority={index === 0}
                                />
                            </div>
                        </Link>
                    ))
                ) : (
                    <div>No data available.</div>
                )}
            </div>
        </div>
    );
};

export default PopularStyles;