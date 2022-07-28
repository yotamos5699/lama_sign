import React, { useState, useEffect } from "react";
import PdfView from "./components/PdfView";
import { Worker } from "@react-pdf-viewer/core";
import Sign from "./components/Sign";
import demo from "./assets/bb.pdf";
import demo2 from "./assets/dd.pdf";
import demo3 from "./assets/demo.pdf";
import Modal from "react-modal";

import "./styles.css";

Modal.setAppElement("#root");
let pdfs = [
  {
    isSIgned: false,
    DocNumber: 3230,
    AccountKey: "6107",
    DocumentDetails: "0506655699",
    DocUrl: demo,
  },
  {
    isSIgned: false,
    DocNumber: 3230,
    AccountKey: "6107",
    DocumentDetails: "0506655699",
    DocUrl: demo2,
  },
  {
    isSIgned: false,
    DocNumber: 3230,
    AccountKey: "6107",
    DocumentDetails: "0506655699",
    DocUrl: demo3,
  },
];

export default function App() {
  const [result, setResult] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [files, setFiles] = useState();
  const [isMounted, setIsMounted] = useState(false);
  const [courentFile, setCurrentFile] = useState(null);
  useEffect(() => {
    const setData = async () => {
      Promise.all(pdfs.map((doc) => doc.DocUrl))
        .then((res) => {
          setFiles(res);
          console.log(res);
        })
        .catch((err) => console.group(err));
    };
    setData();
  }, []);

  function toggleModal(e) {
    e.preventDefault();
    setIsOpen(!isOpen);
  }
  const setDataToFile = () => {
    console.log("clicked");

    setIsMounted(true);
    console.log(isMounted);
    console.log(files);
  };

  const passPdfToSign = (e, fi) => {
    console.log("ahhahaahahahah");
    setCurrentFile(fi);
  };
  const packageURL = "https://unpkg.com/pdfjs-dist@2.5.207/build/pdf.worker.js";

  return (
    <div className="app">
      <button onClick={setDataToFile}>!!!!!!!! למה </button>
      <Worker workerUrl={packageURL}>
        {isMounted ? (
          files.map((fi) => {
            return (
              <div>
                <PdfView demo={fi} result={result} />
                <button
                  className="submit"
                  onClick={(e) => {
                    toggleModal(e);
                    passPdfToSign(e, fi);
                  }}
                >
                  חתום
                </button>
              </div>
            );
          })
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
        <Sign
          demo={isMounted && courentFile && courentFile}
          setResult={setResult}
        />
      </Modal>
      <br />
      <br />
      :({!isMounted && <h1>!!!!! loading !!!! </h1>})
    </div>
  );
}
