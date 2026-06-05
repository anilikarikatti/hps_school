import "@fortawesome/fontawesome-free/css/all.min.css";
import "./globals.css";

export const metadata = {
  title: "HPS Hireulligeri | Learning Today, Leading Tomorrow",
  description:
    "Official website of HPS Hireulligeri, a government school in Hireulligeri, Savadatti.",
  keywords: [
    "HPS Hireulligeri",
    "Government School Hireulligeri",
    "School Savadatti",
    "Admissions",
    "Education"
  ],
  openGraph: {
    title: "HPS Hireulligeri",
    description: "Learning Today, Leading Tomorrow",
    type: "website"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
