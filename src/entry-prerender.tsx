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
      meta: { toString(): string };
      link: { toString(): string };
    };
  };

  const metaString = helmet?.meta?.toString() ?? "";
  const linkString = helmet?.link?.toString() ?? "";

  const elements = new Set(
    [metaString, linkString].filter(Boolean)
  );

  return {
    html,
    head: {
      title: (helmet?.title?.toString() ?? "").replace(/<[^>]*>/g, "").trim(),
      elements,
    },
  };
}