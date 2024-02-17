import WheelPicker from "@codeurs/react-simple-wheel-picker";

const SampleWheelPicker = ({ data }) => {
  const handleOnChange = (target) => {
    console.log(target);
  };
  return (
    <WheelPicker
      data={data}
      onChange={handleOnChange}
      height={75}
      titleText="Enter value same as aria-label"
      itemHeight={10}
      selectedID={data[0].id}
      color="#444"
      activeColor="#fff"
      backgroundColor="#202020"
      shadowColor="#202020"
      fontSize={13}
      focusColor="#202020"
    />
  );
};

export default SampleWheelPicker;
