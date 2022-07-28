import React from "react";
import Select from "react-select";
import "../styles.css";
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
      color: "black",
    };
  },
  multiValueLabel: (styles, { data }) => {
    return {
      ...styles,
      height: hi,
      // color: "#fff",
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
      <h3>
        {" "}
        המסך הזה יוחלף באוטנטיקציה של גוגל בתור מודול, או ממשק חיפוש יותר גדול
        כאפליקציה עצמאית{" "}
      </h3>
      <Select
        styles={colorStyles}
        className="drop-select"
        onChange={props.handleDropDownInput}
        options={props.sortedCastumers}
        isMulti
      />

      <button className="api-button" onClick={props.handleAuthButton}>
        {" "}
        משוך קבצים לחתימה{" "}
      </button>
    </div>
  );
};

export default Auth;
