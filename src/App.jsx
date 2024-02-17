import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Sample from "./components/wheel.picker";
import Card from "./components/card";
import Alert from "./sections/alert";
import Sidebar from "./components/sideBar";
import Filter from "./sections/filter";

function App() {
  return (
    <>
      <div className="md:flex bg-background max-sm:flex-wrap">
        <Sidebar />
        <section className=" md:ps-28 md:w-7/12 lg:w-8/12 md:mx-0 mx-3">
          <Alert />
        </section>
        <section className=" mx-3 my-5 md:w-2/5 lg:w-4/12 md:ms-10 md:me-0">
          <Filter />
        </section>
      </div>
    </>
  );
}

export default App;
