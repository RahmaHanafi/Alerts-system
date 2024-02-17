// import React, { useState } from "react";
// import WheelPicker from "react-wheelpicker";

// const Sample = () => {
//   const [pickerOpen, setPickerOpen] = useState(false);
//   const [data] = useState([
//     "Intro to Data Science",
//     "Big Data",
//     "Design and Analysis of Algorithms",
//     "Operating Systems",
//     "Cloud Computing",
//     "Principles of Database Systems",
//   ]);
//   const [defaultSelection, setDefaultSelection] = useState(3);
//   const [selection, setSelection] = useState("Big Data");

//   const handleSelection = (selectedIndex) => {
//     setSelection(data[selectedIndex]);
//     setDefaultSelection(selectedIndex);
//   };

//   const togglePicker = () => {
//     setPickerOpen(!pickerOpen);
//   };

//   return (
//     <>
//       <div
//         className="selected"
//         onClick={togglePicker}
//         style={{
//           background: "#f2f2f2",
//           padding: "10px",
//           cursor: "pointer",
//         }}
//       >
//         {selection}
//       </div>
//       {pickerOpen && (
//         <div className="demo-container">
//           <WheelPicker
//             animation="flat"
//             data={data}
//             height={40}
//             parentHeight={250}
//             fontSize={13}
//             defaultSelection={defaultSelection}
//             updateSelection={handleSelection}
//             scrollerId="scroll-select-subject"
//             style={{
//               border: "1px solid #129",
//               borderRadius: "50px",
//               padding: "0px",
//               //   boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
//               background: "#921",
//             }}
//           />
//         </div>
//       )}
//     </>
//   );
// };

// export default Sample;

// import WheelPicker from "react-simple-wheel-picker";

// const data = [
//   {
//     id: "1",
//     value: "test1",
//   },
//   {
//     id: "2",
//     value: "test2",
//   },
//   {
//     id: "3",
//     value: "test3",
//   },
//   {
//     id: "4",
//     value: "test4",
//   },
//   {
//     id: "5",
//     value: "test5",
//   },
// ];

// const Sample = () => {
//   const handleOnChange = (target) => {
//     console.log(target);
//   };
//   return (
//     // <WheelPicker
//     //   data={data}
//     //   onChange={handleOnChange}
//     //   height={100}
//     //   width={100}
//     //   titleText="Enter value same as aria-label"
//     //   itemHeight={30}
//     //   selectedID={data[1].id}
//     //   color="#00f"
//     //   activeColor="#fff"
//     //   backgroundcolor="#0f0"
//     //   focuscolor="#f00"
//     //   shadowColor="#a07"
//     //   style={{
//     //     backgroundcolor: "#a07",
//     //   }}
//     // />

//     <>
//       <div className="h-96 carousel carousel-vertical rounded-box">
//         <div className="carousel-item h-7">
//           <p>rahma</p>
//         </div>
//         <div className="carousel-item h-7">
//           <p>elsayed</p>
//         </div>
//         <div className="carousel-item h-7">
//           <p>hanafi</p>
//         </div>
//       </div>
//     </>
//   );
// };

// import * as React from "react";
// import * as ReactDOM from "react-dom";
// import DatePicker from "react-mobile-datepicker";
// import "react-mobile-datepicker-ts/dist/main.css";

// const Sample = () => {
//   const [time, setTime] = React.useState(new Date());
//   const [isOpen, setIsOpen] = React.useState(false);
//   const handleToggle = (nextIsOpen) => {
//     setIsOpen(nextIsOpen);
//   };

//   const handleSelect = (nextTime) => {
//     setTime(nextTime);
//     setIsOpen(false);
//   };

//   return (
//     <div>
//       <p>{time.toLocaleDateString()}</p>
//       <div>
//         <button onClick={() => handleToggle(true)}>select time</button>
//       </div>
//       <DatePicker
//         value={time}
//         isOpen={isOpen}
//         onSelect={handleSelect}
//         onCancel={() => handleToggle(false)}
//       />
//     </div>
//   );
// };

// import { Picker } from "@davidgovea/react-native-wheel-datepicker";

const Sample = () => {
  return (
    <>
      {/* <Picker
        style={{ flex: 1 }}
        selectedValue={3}
        pickerData={[1, 2, 3, 4, 5, 6]}
        onValueChange={(value) => {
          console.log(value);
        }}
      /> */}

      <div>jhwwv</div>
    </>
  );
};

export default Sample;
