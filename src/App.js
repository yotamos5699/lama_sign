import React, { useState, useEffect } from "react";
import PdfView from "./components/PdfView";
import { Worker } from "@react-pdf-viewer/core";
import Sign from "./components/Sign";
import demo from "./assets/bb.pdf";
import Modal from "react-modal";
import axios from "axios";
import {
  decodeFromBase64,
  decodeFromBase64DataUri,
  decodePDFRawStream,
} from "pdf-lib";

import "./styles.css";
import { createObjectURL } from "pdfjs-dist";

let toRender = false;

let testURL = [
  "http://www.africau.edu/images/default/sample.pdf",
  "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
  "https://drive.google.com/uc?export=view&id=0B-Gg1zOBRgC4LVNISnJsb2JsVDQ&resourcekey=0-ITE3Ytysw1RcMgbrub7S0g",
];

Modal.setAppElement("#root");
let pdfs = [
  {
    DocumentIssuedStatus: "OK",
    DocumentDefID: 1,
    StockID: 2120,
    DocNumber: 3230,
    AccountKey: "6107",
    Accountname: "בונבון משה שון צרפתי",
    TotalCost: 772.2,
    Address: "שלמה בן יוסף 10",
    DocumentDetails: "0506655699",
    DocUrl:
      "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    Action: 198,
  },
  {
    DocumentIssuedStatus: "OK",
    DocumentDefID: 1,
    StockID: 2123,
    DocNumber: 3233,
    AccountKey: "6107",
    Accountname: "בונבון משה שון צרפתי",
    TotalCost: 772.2,
    Address: "שלמה בן יוסף 10",
    DocumentDetails: "0506655699",
    DocUrl: "http://www.africau.edu/images/default/sample.pdf",
    Action: 198,
  },
  {
    DocumentIssuedStatus: "OK",
    DocumentDefID: 1,
    StockID: 2124,
    DocNumber: 3234,
    AccountKey: "6201",
    Accountname: "בית קפה ג'ון",
    TotalCost: 1053,
    Address: "הגלגל 23, פינת היצירה 10",
    DocumentDetails: "0526544346",
    DocUrl: "https://www.orimi.com/pdf-test.pdf",
    Action: 198,
  },
];

// let demo = pdfs.map(
//   async (doc) => await fetch(doc.DocUrl.).then((res) => res.arrayBuffer())
// );
//console.log(demo);
export default function App() {
  const [result, setResult] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [file, setFile] = useState();

  let pdfsData;
  let [isMounted, setIsMounted] = useState(false);

  useEffect(async () => {
    fetch(testURL[1], {
      mode: "no-cors",
      responseType: "blob",
      headers: {
        //Accept: "application/pdf",
        "Content-Type": "application/pdf",
      },
    }).then((res) => console.log(res));
    //new Blob([res.data], { type: 'application/pdf' })
    // axios
    //   .request({
    //     method: "GET",
    //     url: testURL[0],
    //     responseType: "arraybuffer",
    //     mode: "no-cors",
    //     headers: {
    //       "Access-Control-Allow-Origin": "*",
    //     },
    //   })
    //   .then((response) => setFile(response.data))
    //   .catch((e) => console.log(e));
  }, []);

  //const [fetchedUrl, setFetchedUrl] = useState(f);
  function toggleModal(e) {
    e.preventDefault();
    setIsOpen(!isOpen);
  }
  const setDataToFile = () => {
    console.log("clicked");
    console.log(pdfsData);

    setIsMounted(true);
    //setFile(pdfsData);
    setFile(demo);
    console.log(isMounted);
    console.log(file);
  };
  const packageURL = "https://unpkg.com/pdfjs-dist@2.5.207/build/pdf.worker.js";

  return (
    <div className="app">
      <button onClick={setDataToFile}>!!!!!!!! למה </button>
      <Worker workerUrl={packageURL}>
        {isMounted ? (
          <PdfView demo={file} result={result} />
        ) : (
          <h1> pdf view</h1>
        )}
      </Worker>
      <br />
      <br />
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        {isMounted ? (
          <Sign demo={file} setResult={setResult} />
        ) : (
          <h1>חתום כפרה !!</h1>
        )}
      </Modal>
      <br />
      <br />
      {isMounted ? (
        <button
          className="submit"
          onClick={(e) => {
            toggleModal(e);
          }}
        >
          חתום
        </button>
      ) : (
        <h1>אבל למה !!!!!!!!! </h1>
      )}
    </div>
  );
}
