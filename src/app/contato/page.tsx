import { Metadata } from "next";
import { title } from "process";

export default function Homes() {
  return (
    <section>
      <h2>Contato</h2>
      <p>Nossas plataformas para contato:</p>
    </section>
  );
}

export const metadata: Metadata = {
  title: "Conatato",
};
