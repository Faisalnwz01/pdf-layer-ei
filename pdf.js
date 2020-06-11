const fs = require('fs');
const { PDFDocument, StandardFonts } = require('pdf-lib');
const info = {
  'Childs EI ID': '123-123-123',
  'Childs First Name': 'John',
  'Childs Last Name': 'Doe',
  'Childs DOB Month': '03',
  'Childs DOB Day': '16',
  'Childs DOB Year': '89',
  'Childs Address': '224 Neptune Avenue',
  'Childs Apt': '2',
  'Childs Zipcode': '11230',
  'Childs City': 'Brooklyn',
};
const config = {
  fontSize: 13,
};

async function modifyPdf() {
  // Fetch an existing PDF document
  const url = './parental_consent_initiate_service_coordination.pdf';
  // const existingPdfBytes = await fetch(url).then((res) => res.arrayBuffer());
  const existingPdfBytes = await fs.promises.readFile(url);

  // Load a PDFDocument from the existing PDF bytes
  const pdfDoc = await PDFDocument.load(existingPdfBytes);

  // Embed the Helvetica font
  const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);

  // Get the first page of the document
  const pages = pdfDoc.getPages();
  const PARENTAL_CONSENT_TO_INITIATE_SERVICE_COORDINATION = pages[0];
  const CONSENT_TO_RELEASE_OBTAIN_INFORMATION = pages[1];
  const CONSENT_TO_RELEASE_OBTAIN_INFORMATION_2 = pages[2];
  const CONSENT_TO_RELEASE_OBTAIN_INFORMATION_3 = pages[3];

  // Get the width and height of the first page
  const { height } = PARENTAL_CONSENT_TO_INITIATE_SERVICE_COORDINATION.getSize();

  // Draw a string of text diagonally across the first page
  PARENTAL_CONSENT_TO_INITIATE_SERVICE_COORDINATION.drawText(info['Childs EI ID'], {
    x: 130,
    y: height - 102,
    size: config.fontSize,
    font: helveticaFont,
  });
  PARENTAL_CONSENT_TO_INITIATE_SERVICE_COORDINATION.drawText(info['Childs DOB Month'], {
    x: 390,
    y: height - 102,
    size: config.fontSize,
    font: helveticaFont,
  });
  PARENTAL_CONSENT_TO_INITIATE_SERVICE_COORDINATION.drawText(info['Childs DOB Day'], {
    x: 415,
    y: height - 102,
    size: config.fontSize,
    font: helveticaFont,
  });
  PARENTAL_CONSENT_TO_INITIATE_SERVICE_COORDINATION.drawText(info['Childs DOB Year'], {
    x: 440,
    y: height - 102,
    size: config.fontSize,
    font: helveticaFont,
  });
  // Draw a string of text diagonally across the first page
  PARENTAL_CONSENT_TO_INITIATE_SERVICE_COORDINATION.drawText(info['Childs First Name'], {
    x: 130,
    y: height - 128,
    size: config.fontSize,
    font: helveticaFont,
  });
  // Draw a string of text diagonally across the first page
  PARENTAL_CONSENT_TO_INITIATE_SERVICE_COORDINATION.drawText(info['Childs Last Name'], {
    x: 320,
    y: height - 128,
    size: config.fontSize,
    font: helveticaFont,
  });

  // Draw a string of text diagonally across the first page
  CONSENT_TO_RELEASE_OBTAIN_INFORMATION.drawText(info['Childs EI ID'], {
    x: 390,
    y: height - 89,
    size: config.fontSize,
    font: helveticaFont,
  });
  CONSENT_TO_RELEASE_OBTAIN_INFORMATION.drawText(info['Childs DOB Month'], {
    x: 507,
    y: height - 89,
    size: config.fontSize,
    font: helveticaFont,
  });
  CONSENT_TO_RELEASE_OBTAIN_INFORMATION.drawText(info['Childs DOB Day'], {
    x: 525,
    y: height - 89,
    size: config.fontSize,
    font: helveticaFont,
  });
  CONSENT_TO_RELEASE_OBTAIN_INFORMATION.drawText(info['Childs DOB Year'], {
    x: 550,
    y: height - 89,
    size: config.fontSize,
    font: helveticaFont,
  });
  // Draw a string of text diagonally across the first page
  CONSENT_TO_RELEASE_OBTAIN_INFORMATION.drawText(`${info['Childs First Name']} ${info['Childs Last Name']}`, {
    x: 130,
    y: height - 89,
    size: config.fontSize,
    font: helveticaFont,
  });
  // Draw a string of text diagonally across the first page
  CONSENT_TO_RELEASE_OBTAIN_INFORMATION.drawText(`${info['Childs Address']}`, {
    x: 90,
    y: height - 104,
    size: config.fontSize,
    font: helveticaFont,
  });
  CONSENT_TO_RELEASE_OBTAIN_INFORMATION.drawText(`${info['Childs City']}`, {
    x: 100,
    y: height - 122,
    size: config.fontSize,
    font: helveticaFont,
  });
  // Draw a string of text diagonally across the first page
  CONSENT_TO_RELEASE_OBTAIN_INFORMATION.drawText(`${info['Childs Apt']}`, {
    x: 430,
    y: height - 104,
    size: config.fontSize,
    font: helveticaFont,
  });
  CONSENT_TO_RELEASE_OBTAIN_INFORMATION.drawText(`${info['Childs Zipcode']}`, {
    x: 430,
    y: height - 122,
    size: config.fontSize,
    font: helveticaFont,
  });
  // Draw a string of text diagonally across the first page
  CONSENT_TO_RELEASE_OBTAIN_INFORMATION_2.drawText(info['Childs EI ID'], {
    x: 390,
    y: height - 89,
    size: config.fontSize,
    font: helveticaFont,
  });
  CONSENT_TO_RELEASE_OBTAIN_INFORMATION_2.drawText(info['Childs DOB Month'], {
    x: 507,
    y: height - 89,
    size: config.fontSize,
    font: helveticaFont,
  });
  CONSENT_TO_RELEASE_OBTAIN_INFORMATION_2.drawText(info['Childs DOB Day'], {
    x: 525,
    y: height - 89,
    size: config.fontSize,
    font: helveticaFont,
  });
  CONSENT_TO_RELEASE_OBTAIN_INFORMATION_2.drawText(info['Childs DOB Year'], {
    x: 550,
    y: height - 89,
    size: config.fontSize,
    font: helveticaFont,
  });
  // Draw a string of text diagonally across the first page
  CONSENT_TO_RELEASE_OBTAIN_INFORMATION_2.drawText(`${info['Childs First Name']} ${info['Childs Last Name']}`, {
    x: 130,
    y: height - 89,
    size: config.fontSize,
    font: helveticaFont,
  });
  // Draw a string of text diagonally across the first page
  CONSENT_TO_RELEASE_OBTAIN_INFORMATION_2.drawText(`${info['Childs Address']}`, {
    x: 90,
    y: height - 104,
    size: config.fontSize,
    font: helveticaFont,
  });
  CONSENT_TO_RELEASE_OBTAIN_INFORMATION_2.drawText(`${info['Childs City']}`, {
    x: 100,
    y: height - 122,
    size: config.fontSize,
    font: helveticaFont,
  });
  // Draw a string of text diagonally across the first page
  CONSENT_TO_RELEASE_OBTAIN_INFORMATION_2.drawText(`${info['Childs Apt']}`, {
    x: 430,
    y: height - 104,
    size: config.fontSize,
    font: helveticaFont,
  });
  CONSENT_TO_RELEASE_OBTAIN_INFORMATION_2.drawText(`${info['Childs Zipcode']}`, {
    x: 430,
    y: height - 122,
    size: config.fontSize,
    font: helveticaFont,
  });
  // Draw a string of text diagonally across the first page
  CONSENT_TO_RELEASE_OBTAIN_INFORMATION_3.drawText(info['Childs EI ID'], {
    x: 390,
    y: height - 89,
    size: config.fontSize,
    font: helveticaFont,
  });
  CONSENT_TO_RELEASE_OBTAIN_INFORMATION_3.drawText(info['Childs DOB Month'], {
    x: 507,
    y: height - 89,
    size: config.fontSize,
    font: helveticaFont,
  });
  CONSENT_TO_RELEASE_OBTAIN_INFORMATION_3.drawText(info['Childs DOB Day'], {
    x: 525,
    y: height - 89,
    size: config.fontSize,
    font: helveticaFont,
  });
  CONSENT_TO_RELEASE_OBTAIN_INFORMATION_3.drawText(info['Childs DOB Year'], {
    x: 550,
    y: height - 89,
    size: config.fontSize,
    font: helveticaFont,
  });
  // Draw a string of text diagonally across the first page
  CONSENT_TO_RELEASE_OBTAIN_INFORMATION_3.drawText(`${info['Childs First Name']} ${info['Childs Last Name']}`, {
    x: 130,
    y: height - 89,
    size: config.fontSize,
    font: helveticaFont,
  });
  // Draw a string of text diagonally across the first page
  CONSENT_TO_RELEASE_OBTAIN_INFORMATION_3.drawText(`${info['Childs Address']}`, {
    x: 90,
    y: height - 104,
    size: config.fontSize,
    font: helveticaFont,
  });
  CONSENT_TO_RELEASE_OBTAIN_INFORMATION_3.drawText(`${info['Childs City']}`, {
    x: 100,
    y: height - 122,
    size: config.fontSize,
    font: helveticaFont,
  });
  // Draw a string of text diagonally across the first page
  CONSENT_TO_RELEASE_OBTAIN_INFORMATION_3.drawText(`${info['Childs Apt']}`, {
    x: 430,
    y: height - 104,
    size: config.fontSize,
    font: helveticaFont,
  });
  CONSENT_TO_RELEASE_OBTAIN_INFORMATION_3.drawText(`${info['Childs Zipcode']}`, {
    x: 430,
    y: height - 122,
    size: config.fontSize,
    font: helveticaFont,
  });

  // Serialize the PDFDocument to bytes (a Uint8Array)
  const pdfBytes = await pdfDoc.save();

  fs.writeFileSync('some.pdf', pdfBytes);
  // Trigger the browser to download the PDF document
  // download(pdfBytes, 'pdf-lib_modification_example.pdf', 'application/pdf');
}

modifyPdf();
