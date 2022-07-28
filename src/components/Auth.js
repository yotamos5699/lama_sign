import React from "react";
import Select from "react-select";
let hi = "45px";
const colorStyles = {
  control: (styles) => ({ ...styles, backgroundColor: "white", height: hi }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return { ...styles, height: hi };
  },
  multiValue: (styles, { data }) => {
    return {
      ...styles,
      height: hi,
      color: "#fff",
    };
  },
  multiValueLabel: (styles, { data }) => {
    return {
      ...styles,
      height: hi,
      color: "#fff",
    };
  },
  multiValueRemove: (styles, { data }) => {
    return {
      ...styles,
      color: "#fff",
      height: hi,
      cursor: "pointer",
      ":hover": {
        color: "#fff",
      },
    };
  },
};

const Auth = (props) => {
  return (
    <div>
      <h1>Auth Screen</h1>
      <h3> המסך הזה יוחלף באוטנטיקציה של גוגל </h3>
      <Select
        styles={colorStyles}
        className="drop-select"
        onChange={props.handleDropDownInput}
        options={props.sortedCastumers}
        isMulti
      />

      <button onClick={props.handleAuthButton}> משוך קבצים לחתימה </button>
    </div>
  );
};

export default Auth;
