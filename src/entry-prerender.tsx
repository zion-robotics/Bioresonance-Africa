import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider } from "react-helmet-async";
import AppContent from "./AppContent";

export async function prerender(data: { url: string }) {
  const helmetContext: Record<string, unknown> = {};

  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={data.url}>
        <AppContent />
      </StaticRouter>
    </HelmetProvider>
  );

  const { helmet } = helmetContext as {
    helmet: {
      title: { toString(): string };
      meta: { toComponent(): React.ReactElement[] };
      link: { toComponent(): React.ReactElement[] };
    };
  };

  const elements = new Set([
    ...(helmet?.meta?.toComponent() ?? []),
    ...(helmet?.link?.toComponent() ?? []),
  ]);

  return {
    html,
    head: {
      title: helmet?.title?.toString() ?? "",
      elements,
    },
  };
}
