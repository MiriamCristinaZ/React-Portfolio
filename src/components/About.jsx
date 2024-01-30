import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
import html2pdf from "html2pdf.js";
import jsPDF from "jspdf";
import "jspdf-autotable";

function About() {
  // Function to handle the PDF downloa

  function handleDownloadPDF() {
    const input = document.getElementById("about-content");
    const pdfOptions = {
      margin: 10,
      filename: "about.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    html2pdf()
      .from(input)
      .set(pdfOptions)
      .outputPdf((pdf) => {
        pdf.save();
      });
  }

  return (
    <div>
      <h2>About Me</h2>
      <div id="about-content">
        {/* Add content about your studies and experience */}
        <p>My studies and experience...</p>
      </div>
      <button onClick={handleDownloadPDF}>Download PDF</button>
    </div>
  );
}

export default About;
