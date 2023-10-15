import "./globals.css";

import Header from "./components/Header";
import { OpeningHero } from "./components/OpeningHero";
import { Specials } from "./components/Specials";

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
          <Specials/>
        </div>
      </body>
    </html>
  );
}
