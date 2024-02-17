import { useState } from "react";
import Card from "../components/card";
import searchIcon from "/Search.svg";
import alertIcon from "/blueAlert.svg";

const Alert = () => {
  const [companies, setCompanies] = useState([
    {
      id: 1,
      name: "AMZN",
      amount: 200,
      percent: "-0.25%",
      risk: "low",
    },
    {
      id: 2,
      name: "TSLA",
      amount: 300,
      percent: "-0.25%",
      risk: "high",
    },
    {
      id: 3,
      name: "ABQQ",
      amount: 250,
      percent: "+0.25%",
      risk: "high",
    },
    {
      id: 4,
      name: "MSFT",
      amount: 230,
      percent: "-0.25%",
      risk: "low",
    },
    {
      id: 5,
      name: "PYPL",
      amount: 130,
      percent: "-0.25%",
      risk: "high",
    },
    {
      id: 6,
      name: "NFLX",
      amount: 200,
      percent: "+0.25%",
      risk: "low",
    },
    {
      id: 7,
      name: "MSFT",
      amount: 200,
      percent: "-0.25%",
      risk: "low",
    },
    {
      id: 8,
      name: "RSFT",
      amount: 200,
      percent: "+0.25%",
      risk: "high",
    },
  ]);

  const [currentIndex, setCurrentIndex] = useState(null);
  return (
    <>
      <div className=" bg-background">
        <section className="flex items-center justify-between space-x-2 sm:space-x-4 py-5">
          <div className="flex gap-2 sm:gap-4 w-1/5 sm:w-1/6">
            <div className="bg-blue text-blue rounded-xl h-9 sm:h-12">-</div>
            <h1 className=" text-2xl flex items-center text-white  md:text-3xl lg:text-5xl font-bold ">
              ALERTS
            </h1>
          </div>

          <label className="input flex items-center max-sm:justify-center  bg-gray rounded-lg w-10/12 h-9 md:w-6/12 lg:w-8/12 sm:h-10 ">
            <input
              type="text"
              className="grow text-white"
              placeholder="Search by..."
            />
            {/* <img src={searchIcon} alt="search icon" className="" /> */}
          </label>
          <div className=" relative pe-1  ">
            <div className="badge bad badge-success badge-xs text-white absolute -top-1 -right-1">
              6
            </div>
            <img src={alertIcon} alt=" blue alert icon" className="  h-6" />
          </div>
        </section>
        <section>
          {companies.map((company) => (
            <Card
              name={company.name}
              amount={company.amount}
              percent={company.percent}
              risk={company.risk}
              id={company.id}
              key={company.id}
              setCurrentIndex={setCurrentIndex}
              currentIndex={currentIndex}
            />
          ))}
        </section>
      </div>
    </>
  );
};

export default Alert;
