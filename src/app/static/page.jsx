import { cookies } from "next/headers";

export default function Static() {
  const cookieStore = cookies();
  const theme = cookieStore.get("theme");
  console.log("theme: ", theme);

  return (
    <div className="Static">
      <h1>Static</h1>
    </div>
  );
}
