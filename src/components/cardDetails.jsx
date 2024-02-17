const CardDetails = ({ icon, currentIndex, id, name, color1, color2 }) => {
  let color;
  if (name.charAt(0) === "-") color = color1;
  else if (name.charAt(0) === "+") color = color2;
  else color = color1;
  return (
    <>
      <div className=" max-sm:flex-col items-center space-y-3 sm:flex sm:justify-evenly sm:space-y-0 w-1/4">
        <img src={icon} alt="arrows icon" />
        <h6
          className={`text-sm color ${
            currentIndex === id ? "font-semibold" : ""
          } `}
        >
          {percent}
        </h6>
      </div>
    </>
  );
};

export default CardDetails;
