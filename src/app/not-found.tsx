import { Metadata } from "next";
import { title } from "process";

export const metadata: Metadata = {
  title: "pagina não encontrada | PetShop",
  robots: "noindex",
};

export default function Pagina404() {
  return (
    <section>
      <h2>Ops! pagina não encontrada</h2>
    </section>
  );
}
