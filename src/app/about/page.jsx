"use client";

// function promiseSetTimeOut(time) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve();
//     }, time);
//   });
// }

function delayForDemo(promise) {
  return new Promise((resolve) => {
    setTimeout(resolve, 3000);
  }).then(() => promise);
}

import { Suspense, lazy } from "react";

// setti

const Main = lazy(() => delayForDemo(import("./Main")));

export default function DashBoard() {
  console.log("page loaded");

  //   const getDatainDelay = async (time, data) => {
  //     await promiseSetTimeOut(time);
  //     // return <button onClick={clickHandler}>data</button>;
  //     return <button>data</button>;
  //   };

  return (
    <>
      <header>
        <h1>Dashboard</h1>
      </header>
      <Suspense fallback={<button>Loading..</button>}>
        {/* <main>{getDatainDelay(500, "hey this is main loaded")}</main> */}
        <Main />
      </Suspense>

      <footer>copyright by nextjs</footer>
    </>
  );
}
