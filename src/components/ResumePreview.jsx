import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
  PDFDownloadLink,
} from "@react-pdf/renderer";
import { useMemo } from "react";

// Definir estilos para el documento PDF
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    padding: 30,
    fontSize: 12,
  },
  section: {
    marginBottom: 10,
    padding: 10,
  },
  header: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  text: {
    marginBottom: 10,
  },
  field: {
    fontSize: 14,
  },
});

// Componente para generar el PDF
const MyDocument = ({ formData }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.header}>Resume Preview</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.field}>First Name: {formData.firstName}</Text>
        <Text style={styles.field}>Last Name: {formData.lastName}</Text>
        {/* Añade más campos aquí */}
      </View>
    </Page>
  </Document>
);

export default function ResumePreview({ formData }) {
  // Memoriza el documento para evitar parpadeos al renderizar
  const memoizedDocument = useMemo(
    () => <MyDocument formData={formData} />,
    [formData]
  );

  return (
    <div className="w-full h-screen">
      {/* PDF Viewer para ver la previsualización en la pantalla */}
      <PDFViewer width="100%" height="100%">
        {memoizedDocument}
      </PDFViewer>

      {/* Enlace para descargar el PDF */}
      <div className="mt-4">
        <PDFDownloadLink document={memoizedDocument} fileName="resume.pdf">
          {({ loading }) => (loading ? "Generating PDF..." : "Download PDF")}
        </PDFDownloadLink>
      </div>
    </div>
  );
}
