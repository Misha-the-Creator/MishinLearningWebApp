import { createFileRoute } from "@tanstack/react-router";
import "katex/dist/katex.min.css";
import { LaTeX } from "./LaTeX";
import Test from "./Test.mdx";

export const Route = createFileRoute("/ml/$article")({
  component: RouteComponent,
});

function RouteComponent() {
  const { article } = Route.useParams();

  return (
    <div>
      Я на теме {article}
      <p>
        Инлайн: <LaTeX expression="E = mc^2" />
      </p>
      <LaTeX
        expression="\int_0^\infty e^{-x^2} dx = \frac{\sqrt{\pi}}{2}"
        block
      />
      <Test components={{ LaTeX }} />
    </div>
  );
}
