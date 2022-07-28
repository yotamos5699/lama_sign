import React, { useState } from "react";
import { CharacterMap, Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
const characterMap = {
  isCompressed: true,
  // The url has to end with "/"
  url: "https://unpkg.com/pdfjs-dist@2.6.347/cmaps/",
};

const PdfView = ({ demo }) => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div className="pdf-container">
      <Viewer
        CharacterMap={characterMap}
        httpHeaders={{
          mode: "no-cors",
        }}
        // CharacterMap={characterMap}
        fileUrl={demo}
        plugins={[defaultLayoutPluginInstance]}
      />
    </div>
  );
};

export default PdfView;
