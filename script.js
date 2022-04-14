function createPdf() {
  if document.getElementById("input").value == "" {
      alert("Please enter text");
  }
  else {
    var doc = new jsPDF();
    doc.text(document.getElementById("input").value, 10, 10);
    doc.save("output.pdf");
  }
}
