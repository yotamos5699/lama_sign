import React from "react";
import Select from "react-select";
import "../styles.css";
import { colorStyles } from "../stylesNmock";
let hi = "45px";

const Auth = (props) => {
  return (
    <div>
      <div className="auth-screen">
        <div>
          <h1>Auth Screen</h1>
          <h3>
            {" "}
            המסך הזה יוחלף באוטנטיקציה של גוגל בתור מודול, או ממשק חיפוש יותר
            גדול כאפליקציה עצמאית{" "}
          </h3>
          <h1> בחר מחתים </h1>
        </div>
        <div className="signer-controls">
          <Select
            styles={colorStyles}
            className="drop-select"
            onChange={props.handleDropDownInput}
            options={props.signersList}
            isMulti
          />
          <button> המשך </button>
        </div>
      </div>
      <div className="search-screen">
        <h1> בחר קבצים לחתימה </h1>
        <div>
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
      </div>
    </div>
  );
};

export default Auth;
