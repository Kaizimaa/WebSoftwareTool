import localFont from "next/font/local";
import "./globals.css";
import Header from "../components/header";
import Footer from "../components/footer";
import Sidemenu from "../components/sidemenu";
import Main from "../components/main";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Test App",
  description: "Test app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <Header />
        <div className="flex flex-1">
          <Sidemenu />
          <Main>{children}</Main>
        </div>
        <Footer />
      </body>
    </html>
  );
}