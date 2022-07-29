import React, { useRef, useState, useEffect } from "react";
import PdfView from "./components/PdfView";
import { Worker } from "@react-pdf-viewer/core";
import Sign from "./components/Sign";
import Modal from "react-modal";
import "./styles.css";
import Auth from "./components/Auth";
import { signersList,castumersList, pdfs } from "./stylesNmock";
//import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
Modal.setAppElement("#root");

export default function App() {
  const [result, setResult] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [files, setFiles] = useState();
  const [isMounted, setIsMounted] = useState(false);
  const [courentFile, setCurrentFile] = useState(null);
  const [sortedCastumers, setSortedCastumers] = useState();
  const [isSelected, setIsSelected] = useState(false);
  const [docsObject, setDocsObject] = useState();
  const [signersList, setSignersList] = useState();
  const urlsToRender = useRef();
  const dropValRef = useRef();

  useEffect(() => {
    const setData = async () => {
      setSortedCastumers(castumersList);
      setDocsObject(pdfs);
      setSignersList(signersList.map(signer=> signer.signerData))
    };
    setData();
  }, []);

  const loadPdfs = async (urls) => {
    return Promise.all(urls)
      .then((res) => {
        console.log("****** res in promise ******", res);
        return res;
      })
      .catch((err) => console.group(err));
  };

  const handleDropDownInput = (event) => {
    console.log("****** Event *******"event)
    dropValRef.current = event;
    console.log("****** event in handleDropDownInput ******", event);
    console.log("dropValue  ", dropValRef);

    let asignUrls = [];
    docsObject.forEach((doc) => {
      dropValRef.current.forEach((value) => {
        if (doc.AccountKey == value.value) {
          asignUrls.push(doc.DocUrl);
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
    console.log("****** clicked setDataToFile ******");

    setIsMounted(true);
    console.log(isMounted);
    console.log(files);
  };
  const handleAuthButton = (event) => {
    console.log("****** urlsToRender ******", urlsToRender);
    loadPdfs(urlsToRender.current)
      .then((res) => setTimeout(setFiles(res), 5000))
      .then(setIsSelected(true))
      .catch((err) => console.log(err));
  };

  const passPdfToSign = (e, fi) => {
    console.log("****** selected PDF to signing ******");
    setCurrentFile(fi);
  };
  const packageURL = "https://unpkg.com/pdfjs-dist@2.5.207/build/pdf.worker.js";

  return (
    <div className="app">
      <Auth
        handleDropDownInput={handleDropDownInput}
        handleAuthButton={handleAuthButton}
        sortedCastumers={sortedCastumers}
        signersList={signersList}
      />
      <button className="api-button" onClick={setDataToFile}>
        כפתור שמושך מידע מ API{" "}
      </button>
      <Worker workerUrl={packageURL}>
        {isMounted && isSelected ? (
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
          <h1> סתם מידע </h1>
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
          demo={isMounted && isSelected && courentFile && courentFile}
          setResult={setResult}
        />
      </Modal>
      <br />
      <br />
      :({!isSelected && isMounted && <h1>!!!!! loading !!!! </h1>})
    </div>
  );
}
