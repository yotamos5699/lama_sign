import React from "react";
import SignatureCanvas from "react-signature-canvas";
import modifyPdf, { download } from "./modifyPDF";
//import demo from "../assets/bb.pdf";

const Sign = ({ demo, result, setResult, isOpen, toggleModal }) => {
  let sigPad = {};

  const clear = (e) => {
    e.preventDefault();
    sigPad.clear();
  };
  const trim = (e) => {
    e.preventDefault();
    const url = sigPad.getTrimmedCanvas().toDataURL("image/png");
    modifyPdf(demo, url)
      .then((res) => download(res))
      .catch((err) => console.log(err));
  };

  return (
    <div className="signature">
      <SignatureCanvas
        ref={(ref) => {
          sigPad = ref;
        }}
        penColor="black"
        canvasProps={{ width: 500, height: 200, className: "sigCanvas" }}
      />
      <br />
      <button
        onClick={(e) => {
          clear(e);
        }}
      >
        נקה
      </button>
      <button
        onClick={(e) => {
          trim(e);
        }}
      >
        שמור
      </button>
      <br />
    </div>
  );
};

export default Sign;
