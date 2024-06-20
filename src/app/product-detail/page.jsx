import { Suspense } from "react";
import { Product } from "../components/product";
import { Reviews } from "../components/reviews";
import { cookies } from "next/headers";

export default function ProductDetail() {

   const cookieStore = cookies();
  const theme = cookieStore.get("theme");
  console.log("theme: ", theme);

  return (
    <div>
      <h1>Product Detail Page</h1>
      <Suspense fallback={<p>Loading Product...</p>}>
        <Product />
      </Suspense>
      <Suspense fallback={<p>Loading Reviews...</p>}>
        <Reviews />
      </Suspense>
    </div>
  );
}
