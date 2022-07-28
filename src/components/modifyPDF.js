import { PDFDocument } from "pdf-lib";

export default async function modifyPDf(pdfUrl, imageUrl) {
  const pdfBytes = await fetch(pdfUrl).then((res) => res.arrayBuffer());
  const imageBytes = await fetch(imageUrl).then((res) => res.arrayBuffer());

  const pdf = await PDFDocument.load(pdfBytes);
  const signature = await pdf.embedPng(imageBytes);
  const pages = pdf.getPages();
  const page = pages[0];
  const pngDims = signature.scale(0.5);
  page.drawImage(signature, {
    x: page.getWidth() / 2 - (pngDims.width + 50),
    y: page.getHeight() / 2 - (pngDims.height + 50),
    width: pngDims.width,
    height: pngDims.height,
  });
  //const form = pdf.getForm();
  // console.log(form);
  // const staff = form.getButton("signature");
  //staff.setImage(signature);
  const finalPdfBytes = await pdf.save();

  // Trigger the browser to download the PDF document
  return finalPdfBytes;
}

export const download = (binaryData) => {
  const file = new Blob([binaryData], { type: "application/pdf" });
  const fileURL = URL.createObjectURL(file);
  window.open(fileURL);
};

// import { PDFDocument } from 'pdf-lib'

// async function embedImages() {
//   const jpgUrl = 'https://pdf-lib.js.org/assets/cat_riding_unicorn.jpg'
//   const pngUrl = 'https://pdf-lib.js.org/assets/minions_banana_alpha.png'

//   const jpgImageBytes = await fetch(jpgUrl).then((res) => res.arrayBuffer())
//   //pngImageBytes = await fetch(pngUrl).then((res) => res.arrayBuffer())

//   const pdfDoc = await PDFDocument.create()

//   const jpgImage = await pdfDoc.embedJpg(jpgImageBytes)
//  //const pngImage = await pdfDoc.embedPng(pngImageBytes)

//   const jpgDims = jpgImage.scale(0.5)
//  // const pngDims = pngImage.scale(0.5)

//   const page = pdfDoc.addPage()

//   page.drawImage(jpgImage, {
//     x: page.getWidth() / 2 - jpgDims.width / 2,
//     y: page.getHeight() / 2 - jpgDims.height / 2 + 250,
//     width: jpgDims.width,
//     height: jpgDims.height,
//   })
//   page.drawImage(pngImage, {
//     x: page.getWidth() / 2 - pngDims.width / 2 + 75,
//     y: page.getHeight() / 2 - pngDims.height + 250,
//     width: pngDims.width,
//     height: pngDims.height,
//   })

//   const pdfBytes = await pdfDoc.save()
// }
