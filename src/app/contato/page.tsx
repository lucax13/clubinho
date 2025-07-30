import { Metadata } from "next";
import { title } from "process";

export const metadata: Metadata = {
  title: "Contato | PetShop",
  description: "fale com a gente",
};

export default function Homes() {
  return (
    <section>
      <h2>Contato</h2>
      <p>Nossas plataformas para contato: </p>
    </section>
  );
}
