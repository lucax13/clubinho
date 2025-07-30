import Link from "next/link";
import Cabecalho from "../page";

export default function Menu() {
  return (
    <nav>
      <Link href="/">Blog</Link>
      <Link href="/produtos">Produtos</Link>
      <Link href="/contato">Contato</Link>
      <Link href="/sobre">Sobre</Link>
      <Cabecalho />
    </nav>
  );
}
