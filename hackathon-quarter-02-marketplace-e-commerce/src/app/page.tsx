import FeaturedProducts from "@/components/FeaturedProducts";
import Hero from "@/components/Hero";
import Sponsors from "@/components/Sponsors";
import TopCategories from "@/components/TopCategories";
import PopularStyles from "@/components/PopularStyles";
import OurProduct from "@/components/OurProduct";
import { client } from "@/sanity/lib/client";
 
export default async function Home() {
  const Data = await client.fetch(
    `*[_type == "products" && "gallery" in tags]{
        _id,
        "imageUrl": image.asset->url,
        title,
        "slug": slug.current
    }`
);


if (!Data) {
    console.error("No data fetched from Sanity.");
    return <div>Error: Unable to fetch data.</div>;
}
  return (
   <div>
      <Hero/>
      <Sponsors/>
      <FeaturedProducts/>
      <TopCategories/>
      <PopularStyles Data={Data} />
      <OurProduct/>
   </div>
  );
}
