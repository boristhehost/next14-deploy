const DELAYTIME = 4000;

export async function Reviews() {
  await new Promise((resolve) => setTimeout(resolve, DELAYTIME));
  return <div>Reviews</div>;
}
