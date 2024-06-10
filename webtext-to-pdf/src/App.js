/* global chrome */
import React from "react";
import "./App.css";

function App() {
  const convertToPDF = async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: () => {
        // Load jsPDF and html2canvas dynamically within the content script
        const loadScript = (src) => {
          return new Promise((resolve, reject) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
          });
        };

        const loadLibraries = async () => {
          try {
            await loadScript(
              "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"
            );
            await loadScript(
              "https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.3.2/html2canvas.min.js"
            );

            // Libraries are loaded, now generate the PDF
            const { jsPDF } = window.jspdf;
            // eslint-disable-next-line no-undef
            html2canvas(document.body).then((canvas) => {
              const imgData = canvas.toDataURL("image/png");
              const pdf = new jsPDF();
              pdf.addImage(imgData, "PNG", 0, 0);
              pdf.save("download.pdf");
            });
          } catch (error) {
            console.error("Error loading libraries:", error);
          }
        };

        loadLibraries();
      },
    });
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Web Text to PDF</h1>
        <button onClick={convertToPDF}>Convert to PDF</button>
      </header>
    </div>
  );
}

export default App;
