import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import DocuPdf from './DocuPDF';
import VistaWeb from './VistaWeb';
import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';

// function App() {
//   return (
//     <div>
//       <VistaWeb />
//     </div>
//   );
// }

// export default App;

function App() {
  const [verWeb, setVerWeb] = useState(false);
  const [verPdf, setVerPdf] = useState(false);

  const Menu = () => {
    return (
      <nav>
        <Button
          onClick={() => {
            setVerWeb(!verWeb);
            setVerPdf(false);
          }}>
          {verWeb ? 'Ocultar Web' : 'Ver Web'}
        </Button>
        <Button
          onClick={() => {
            setVerWeb(false);
            setVerPdf(!verPdf);
          }}>
          {verPdf ? 'Ocultar PDF' : 'Ver PDF'}
        </Button>
        <PDFDownloadLink document={<DocuPdf />} fileName='test.pdf'>
          <Button>Descargar PDF</Button>
        </PDFDownloadLink>
      </nav>
    );
  };
  return (
    <div>
      <Menu />
      {verWeb ? <VistaWeb /> : null}
      {verPdf ? (
        <PDFViewer style={{ width: '100%', height: '100vh' }}>
          <DocuPdf />
        </PDFViewer>
      ) : null}
    </div>
  );
}

export default App;
