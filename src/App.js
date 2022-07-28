import React, { useRef, useState, useEffect } from "react";
import PdfView from "./components/PdfView";
import { Worker } from "@react-pdf-viewer/core";
import Sign from "./components/Sign";
import aa from "./assets/aa.PDF";
import bb from "./assets/bb.pdf";
import cc from "./assets/cc.PDF";
import dd from "./assets/dd.pdf";
import ee from "./assets/ee.pdf";
import ff from "./assets/ff.PDF";
import gg from "./assets/gg.pdf";
import hh from "./assets/hh.PDF";
import ii from "./assets/ii.PDF";
import jj from "./assets/jj.pdf";
import Modal from "react-modal";

import "./styles.css";
import Auth from "./components/Auth";
//import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
Modal.setAppElement("#root");
let pdfs = [
  {
    isSIgned: false,
    DocNumber: 3276,
    AccountKey: "6107",
    DocumentDetails: "0505455699",
    DocUrl: aa,
  },
  {
    isSIgned: false,
    DocNumber: 4530,
    AccountKey: "6900",
    DocumentDetails: "05066558764",
    DocUrl: bb,
  },
  {
    isSIgned: false,
    DocNumber: 2312,
    AccountKey: "6207",
    DocumentDetails: "0506612313",
    DocUrl: cc,
  },
  {
    isSIgned: false,
    DocNumber: 3320,
    AccountKey: "6707",
    DocumentDetails: "0506655632",
    DocUrl: dd,
  },
  {
    isSIgned: false,
    DocNumber: 3530,
    AccountKey: "6531",
    Phone: "0501231231",
    DocUrl: ee,
  },
  {
    isSIgned: false,
    DocNumber: 3230,
    AccountKey: "6051",
    Phone: "0506655698",
    DocUrl: ff,
  },
  {
    isSIgned: false,
    DocNumber: 4230,
    AccountKey: "6031",
    Phone: "0509980680",
    DocUrl: gg,
  },
  {
    isSIgned: false,
    DocNumber: 3230,
    AccountKey: "6031",
    Phone: "0509980680",
    DocUrl: hh,
  },
  {
    isSIgned: false,
    DocNumber: 3254,
    AccountKey: "6107",

    Phone: "0506655699",
    DocUrl: ii,
  },

  {
    isSIgned: false,
    DocNumber: 3342,
    AccountKey: "6107",
    Phone: "0506655699",
    DocUrl: jj,
  },
];

let castumersList = [
  { value: "6107", label: "רמי" },
  { value: "6900", label: "איציק" },
  { value: "6031", label: "משה" },
  { value: "6051", label: "טל" },
  { value: "6531", label: "רמי" },
  { value: "6707", label: "דותן לוי" },
  { value: "6051", label: "סמי הכבאי" },
  { value: "6207", label: "ילד הומו" },
];

export default function App() {
  const [result, setResult] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [files, setFiles] = useState();
  const [isMounted, setIsMounted] = useState(false);
  const [courentFile, setCurrentFile] = useState(null);
  const [sortedCastumers, setSortedCastumers] = useState();
  const [isSelected, setIsSelected] = useState(false);
  const [docsObject, setDocsObject] = useState();

  const urlsToRender = useRef();
  const dropValRef = useRef();

  useEffect(() => {
    const setData = async () => {
      setSortedCastumers(castumersList);
      setDocsObject(pdfs);
    };
    setData();
  }, []);

  const loadPdfs = async (urls) => {
    Promise.all(urls.map((doc) => doc.DocUrl))
      .then((res) => {
        setFiles(res);
        console.log(res);
      })
      .catch((err) => console.group(err));
  };
  const handleDropDownInput = (event) => {
    dropValRef.current = event;
    console.log("ebent", event);
    console.log("dropValue  ", dropValRef);

    let asignUrls = [];

    docsObject.forEach((doc, index) => {
      dropValRef.current.forEach((value) => {
        if (doc.AccountKey == value.value) {
          asignUrls.push(files[index]);
        }
      });
      console.log(asignUrls);
      urlsToRender.current = asignUrls;
    });
  };
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
  const handleAuthButton = (event) => {
    loadPdfs(urlsToRender)
      .then((res) => setFiles(res))
      .then(setIsSelected(true))
      .catch((err) => console.log(err));
  };

  const passPdfToSign = (e, fi) => {
    console.log("ahhahaahahahah");
    setCurrentFile(fi);
  };
  const packageURL = "https://unpkg.com/pdfjs-dist@2.5.207/build/pdf.worker.js";

  return (
    <div className="app">
      <Auth
        handleDropDownInput={handleDropDownInput}
        handleAuthButton={handleAuthButton}
        sortedCastumers={sortedCastumers}
      />
      <button onClick={setDataToFile}>!!!!!!!! למה </button>
      <Worker workerUrl={packageURL}>
        {isSelected && isMounted ? (
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
          demo={isSelected && isMounted && courentFile && courentFile}
          setResult={setResult}
        />
      </Modal>
      <br />
      <br />
      :({!isMounted && <h1>!!!!! loading !!!! </h1>})
    </div>
  );
}
