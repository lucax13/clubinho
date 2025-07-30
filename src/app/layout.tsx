import type { Metadata } from "next";
import { Roboto, Fjalla_One } from "next/font/google";
import "./globals.css";
import Link from "next/link";

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
  keywords: ["petshop", "cachorros", "gatos"],
  authors: [
    {
      name: "Lucas",
      url: "https://github.com/lucax13",
    },
  ],
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
          <h1>
            <Link href="/">PetShop</Link>
          </h1>
          <nav>
            <Link href="/">Blog</Link>
            <Link href="/produtos">Produtos</Link>
            <Link href="/contato">Contato</Link>
            <Link href="/sobre">Sobre</Link>
          </nav>
        </header>

        <main className="limitador">{children}</main>
      </body>
    </html>
  );
}
