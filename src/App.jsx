import React, { useState, useEffect, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import Layout from "./screens/Layout";
const HomeWrapper = lazy(() => import("./screens/Home"));
// const SearchWrapper = lazy(() => import("./screens/Search"));
// PaymentSuccess
export default function App() {
  const [height, setHeight] = useState(0);

  return (
    <div className="based" style={{ height }}>
      {/* <Preloader/> */}
      <Routes>
        <Route path={"/"} element={<Layout />}>
          <Route
            index
            element={
              <Suspense fallback={<></>}>
                <HomeWrapper />
              </Suspense>
            }
          />
          <Route
            path="search"
            element={
              <Suspense fallback={<></>}>
                {/* <SearchWrapper /> */}
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </div>
  );
}
