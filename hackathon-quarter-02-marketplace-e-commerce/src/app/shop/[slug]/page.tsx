
import { client } from "@/sanity/lib/client";
import ProductList from "@/components/productList";

export interface IProduct {
  _id:string;
  slug:string;
  description: string;
  imageUrl: string;
  title: string;
  price: number;
}

interface ICategoryPageProps {
  params: Promise<{ slug: string }>; 
}


const Productpage = async ({params}:ICategoryPageProps) => {
  const { slug } = await params;

const data: IProduct[]  | null = await client.fetch(
  `*[_type == "products" && slug.current == $slug]{
     _id,
     title,
     "imageUrl": image.asset->url,
     "slug": slug.current,
     description,
     price
  }`,
  { slug }
);

if (!data) {
  return <div>Product not found</div>;
}

  return (
    <>
    <div>
    <ProductList products={data}/>
    </div>
      </>
  )
}

export default Productpage