const DELAYTIME = 2000;

export async function Product() {
  await new Promise((resolve) => setTimeout(resolve, DELAYTIME));
  return <div>Product</div>;
}
