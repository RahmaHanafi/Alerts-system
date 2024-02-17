import Icon from "../utils/icon";
const Industry = ({ name, title }) => {
  return (
    <>
      <div className=" group w-fit cursor-pointer ">
        <div className="group-hover:bg-blue rounded-md flex justify-between items-center gap-2 p-1">
          <Icon name={name} color={"text-white"} hoverColor={"text-black"} />
          <h4 className="text-white group-hover:text-black text-xs font-medium capitalize ">
            {title}
          </h4>
        </div>
      </div>
    </>
  );
};

export default Industry;
