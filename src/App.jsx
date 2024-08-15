import React, { useState, useEffect, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import Layout from "./screens/Layout";
const HomeWrapper = lazy(() => import("./screens/Home"));
const ContactWrapper = lazy(() => import("./screens/Contact"));
const InfoWrapper = lazy(() => import("./screens/Info"));
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
            path="contact"
            element={
              <Suspense fallback={<></>}>
                <ContactWrapper />
              </Suspense>
            }
          />

          <Route
            path="tattoo/about"
            element={
              <Suspense fallback={<></>}>
                <InfoWrapper />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </div>
  );
}
