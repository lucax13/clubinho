import type { Metadata } from "next";
import { Roboto, Fjalla_One } from "next/font/google";
import "./globals.css";

/*configura variaveis*/
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
  display: "swap",
});

const fjallaOne = Fjalla_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-fjalla",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PetShop",
  description: "Mini portal de Petshop com noticias, produtos e muito mais",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${roboto.variable} ${fjallaOne.variable}`}>
        <header>
          <h1>PetShop</h1>
        </header>
        {children}
      </body>
    </html>
  );
}
