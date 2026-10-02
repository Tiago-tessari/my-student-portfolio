import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tiago Tessari — Portfólio" },
      {
        name: "description",
        content:
          "Portfólio pessoal de Tiago Tessari — estudante de Engenharia de Software. HTML, CSS, JavaScript, Python e MySQL.",
      },
      { property: "og:title", content: "Tiago Tessari — Portfólio" },
      {
        property: "og:description",
        content:
          "Estudante de Engenharia de Software em busca de estágio em Desenvolvimento de Software.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

// Exibe o portfólio estático servido de public/portfolio/index.html.
// O mesmo código-fonte é entregue na pasta de arquivos para subir no GitHub.
function Index() {
  return (
    <iframe
      src="/portfolio/index.html"
      title="Portfólio de Tiago Tessari"
      style={{
        display: "block",
        width: "100%",
        height: "100vh",
        border: "none",
      }}
    />
  );
}
