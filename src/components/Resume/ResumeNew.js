import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import pdf1 from "../../Assets/IshwinderSinghResume.pdf";

import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [numPages, setNumPages] = useState(null);
  const [containerWidth, setContainerWidth] = useState(null);
  const containerRef = React.createRef();

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  useEffect(() => {
    function handleResize() {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth);
      }
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const renderPages = () => {
    const scale = Math.min(containerWidth / 800, 1); // Adjust for responsive scaling
    return Array.from({ length: numPages }, (_, index) => (
      <Page key={index + 1} pageNumber={index + 1} scale={scale} />
    ));
  };

  return (
    <div>
      <Container fluid className="resume-section" ref={containerRef}>
        <Particle />
        <Row style={{ overflowY: 'auto', maxHeight: '100vh' }}>
          <Document
            file={pdf1}
            className="d-flex flex-column align-items-center"
            onLoadSuccess={onDocumentLoadSuccess}
          >
            {numPages && renderPages()}
          </Document>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
