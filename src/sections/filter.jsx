import Industry from "../components/industry";
import Icon from "../utils/icon";
const Filter = () => {
  const industries = [
    { id: 1, name: "HealthCare", title: "Health Care" },
    { id: 2, name: "Materials", title: "Materials" },
    { id: 3, name: "Energy", title: "Energy" },
    { id: 4, name: "ConsumerDiscretionary", title: "Consumer Discretionary" },
    { id: 5, name: "ConsumerStaples", title: "Consumer staples" },
    { id: 6, name: "RealEstate", title: "Real estate" },
  ];

  const industries1 = [
    { id: 7, name: "IT", title: "IT" },
    { id: 8, name: "Communication", title: "Communication" },
    { id: 9, name: "Industrials", title: "Industrials" },
    { id: 10, name: "Utilities", title: "Utilities" },
    { id: 11, name: "Financials", title: "Financials" },
  ];
  return (
    <>
      <section className="bg-black rounded-lg px-6 w-full">
        <h1 className=" capitalize text-white font-semibold text-3xl font-poppinsSemibold  text-center pt-4 pb-2">
          Filter
        </h1>

        <section className="w-full">
          <div className=" flex justify-between">
            <h2 className=" text-sm text-lightgray font-poppins">
              Filters Applied
            </h2>
            <button className="btn bg-transparent text-sm btn-xs border-0 text-white font-poppins">
              Clear All
            </button>
          </div>
          <div className="w-full bg-darkGray rounded-md h-16 p-3">
            <div className="badge badge-primary gap-2 rounded flex items-center badge-sm ">
              <h3 className=" font-poppins text-xs">Real estate</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-4 h-4 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </div>
          </div>
        </section>

        <section className="bg-darkGray rounded-md py-2 px-4 mt-4 w-full">
          <h3 className="font-poppins text-white font-bold text-base capitalize">
            stock
          </h3>
          <label className="input input-bordered flex items-center gap-2 bg-gray border-0 input-sm mx-1 rounded-md mt-1">
            <input
              type="text"
              className="grow gray1 text-white"
              placeholder="$ TICKER"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70 text-gray1"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
          <ul className="menu w-full text-white">
            <li>
              <details open>
                <summary className=" text-white font-bold ps-0">
                  Industry
                </summary>

                <section className="flex justify-between items-start ">
                  <div className=" border-s-2 border-white p-2  ">
                    {industries.map((industry) => (
                      <Industry
                        name={industry.name}
                        title={industry.title}
                        key={industry.id}
                      />
                    ))}
                  </div>
                  <div className=" border-s-2 border-white p-2 h-fit ">
                    {industries1.map((industry) => (
                      <Industry
                        name={industry.name}
                        title={industry.title}
                        key={industry.id}
                      />
                    ))}
                  </div>
                </section>
              </details>
            </li>
          </ul>

          <section className="flex justify-end items-start w-full gap-5 ">
            <ul className="menu w-1/2 text-white">
              <li>
                <details open>
                  <summary className=" text-white font-bold ps-0 capitalize">
                    market cap
                  </summary>

                  <label className="label cursor-pointer flex justify-start gap-2">
                    <input
                      type="radio"
                      name="radio-10"
                      className="radio radio-primary radio-xs border-radio bg-radio checked:bg-blue checked:border-white"
                    />
                    <span className="label-text">Micro</span>
                  </label>
                  <label className="label cursor-pointer flex justify-start gap-2">
                    <input
                      type="radio"
                      name="radio-10"
                      className="radio radio-primary radio-xs border-radio bg-radio checked:bg-blue checked:border-white"
                    />
                    <span className="label-text">Small</span>
                  </label>
                  <label className="label cursor-pointer flex justify-start gap-2">
                    <input
                      type="radio"
                      name="radio-10"
                      className="radio radio-primary radio-xs border-radio bg-radio checked:bg-blue checked:border-white"
                    />
                    <span className="label-text">Large</span>
                  </label>
                </details>
              </li>
            </ul>
            <ul className="menu w-1/2 text-white">
              <li>
                <details open>
                  <summary className=" text-white font-bold ps-0 capitalize">
                    Risk Level
                  </summary>

                  <label className="label cursor-pointer flex justify-start gap-2">
                    <input
                      type="radio"
                      name="radio-11"
                      className="radio radio-primary radio-xs border-radio bg-radio checked:bg-blue checked:border-white"
                    />
                    <span className="label-text">Low Risk</span>
                  </label>
                  <label className="label cursor-pointer flex justify-start gap-2">
                    <input
                      type="radio"
                      name="radio-11"
                      className="radio radio-primary radio-xs border-radio bg-radio checked:bg-blue checked:border-white"
                    />
                    <span className="label-text">Mid Risk</span>
                  </label>
                  <label className="label cursor-pointer flex justify-start gap-2">
                    <input
                      type="radio"
                      name="radio-11"
                      className="radio radio-primary radio-xs border-radio bg-radio checked:bg-blue checked:border-white"
                    />
                    <span className="label-text">High Risk</span>
                  </label>
                </details>
              </li>
            </ul>
          </section>
        </section>
        <section className=" flex justify-center">
          <button className="btn mt-3 btn-primary font-semibold font-poppins text-white text-xl rounded-md px-10">
            Apply
          </button>
        </section>
      </section>
    </>
  );
};

export default Filter;
