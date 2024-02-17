import dollarIcon from "/dollar.svg";
import fileIcon from "/file.svg";
import arrowsIcon from "/arrows.svg";
import lowRiskIcon from "/low risk.svg";
import highRiskIcon from "/high risk.svg";
const Card = ({
  name,
  amount,
  percent,
  risk,
  id,
  setCurrentIndex,
  currentIndex,
}) => {
  //   let { key, company } = props;
  console.log({ name, amount, percent, risk });
  return (
    <>
      {name ? (
        <div
          className="collapse rounded-lg pb-4"
          onClick={() => {
            setCurrentIndex(id);
          }}
        >
          <input type="radio" name="my-accordion-1" className="" />
          <div
            className={`collapse-title flex rounded-lg w-full  ${
              currentIndex === id ? "bg-blue" : "bg-gray"
            } `}
          >
            <div className="max-sm:flex-col max-sm:justify-center items-center space-y-3 sm:flex sm:justify-evenly sm:space-y-0 w-1/3">
              <img
                src={dollarIcon}
                className="mx-auto sm:mx-0"
                alt="dollar icon"
              />
              <h6
                className={`text-center text-white text-sm  ${
                  currentIndex === id ? "font-semibold" : ""
                } `}
              >
                {name}
              </h6>
            </div>
            <div
              className={`divider divider-horizontal ${
                currentIndex === id ? "divider-info " : "divider-neutral"
              }`}
            ></div>
            <div className="max-sm:flex-col max-sm:justify-center items-center space-y-5 sm:flex sm:justify-evenly sm:space-y-0 w-1/4">
              <img src={fileIcon} className="mx-auto sm:mx-0" alt="file icon" />
              <h6
                className={`text-center text-white text-sm  ${
                  currentIndex === id ? "font-semibold" : ""
                } `}
              >
                {amount}
              </h6>
            </div>
            <div
              className={`divider divider-horizontal  ${
                currentIndex === id ? "divider-info " : "divider-neutral"
              } `}
            ></div>
            <div className="max-sm:flex-col items-center space-y-6 sm:flex sm:justify-evenly sm:space-y-0 w-1/4">
              <img
                src={arrowsIcon}
                className="mx-auto sm:mx-0"
                alt="arrows icon"
              />
              <h6
                className={`text-center text-sm ${
                  currentIndex === id ? "font-semibold" : ""
                } ${
                  percent.charAt(0) === "-" ? " text-orange" : " text-green"
                } `}
              >
                {percent}
              </h6>
            </div>
            <div
              className={`divider divider-horizontal  ${
                currentIndex === id ? "divider-info " : "divider-neutral"
              } `}
            ></div>
            <div className="max-sm:flex-col max-sm:justify-center items-center space-y-3  sm:flex  sm:justify-evenly sm:space-y-0 w-1/4">
              <img
                src={risk === "low" ? lowRiskIcon : highRiskIcon}
                className="mx-auto sm:mx-0"
                alt={risk === "low" ? "low Risk icon" : "high Risk icon"}
              />
              <h6
                className={`text-center text-white text-sm capitalize font-normal  ${
                  currentIndex === id ? "font-semibold" : ""
                }`}
              >
                {risk} risk
              </h6>
            </div>
          </div>
          <div className="collapse-content bg-black px-10 rounded-b-lg">
            <h6 className=" text-white text-base pt-6 pb-2">
              <b>$TSLA</b> just announced an acquisition of <b>$NFLX </b>at{" "}
              <b>$200</b> B.
            </h6>
            <p className=" text-white pb-6">
              This is an{" "}
              <u className=" text-blue cursor-pointer">arbitrage opportunity</u>
              , with the max gain being %X if the deal closes, but the possible
              risk is %Y if the deal fails, If the deal success is % and
              therefore the recommended play is{" "}
              <u className=" text-blue cursor-pointer">long/short</u>
              $ABC
            </p>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Card;
