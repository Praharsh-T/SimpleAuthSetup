(async function () {
  // Load jsPDF and html2canvas dynamically
  const script1 = document.createElement("script");
  script1.src =
    "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.4.0/jspdf.umd.min.js";
  script1.onload = () => {
    const script2 = document.createElement("script");
    script2.src =
      "https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.3.2/html2canvas.min.js";
    script2.onload = () => {
      const { jsPDF } = window.jspdf;
      html2canvas(document.body).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF();
        pdf.addImage(imgData, "PNG", 0, 0);
        pdf.save("download.pdf");
      });
    };
    document.head.appendChild(script2);
  };
  document.head.appendChild(script1);
})();
