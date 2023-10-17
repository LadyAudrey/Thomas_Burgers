import "./globals.css";

import Header from "./components/Header";
import { OpeningHero } from "./components/OpeningHero";
import { Specials } from "./components/Specials";
import Menu from "./components/Menu";
import BusinessInfo from "./components/BusinessInfo";
import { Eyecandy } from "./components/Eyecandy";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={""}>
        <Header />
        <div className="h-screen">
          <OpeningHero />
          <Specials />
          <Menu />
          <BusinessInfo />
          <Eyecandy />
        </div>
      </body>
    </html>
  );
}
