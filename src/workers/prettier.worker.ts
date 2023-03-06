import prettier from "prettier";
import parserAngular from "prettier/parser-angular";
import parserBabel from "prettier/parser-babel";
import parserFlow from "prettier/parser-flow";
import parserGraphql from "prettier/parser-graphql";
import parserHtml from "prettier/parser-html";
import parserMarkdown from "prettier/parser-markdown";
import parserPostcss from "prettier/parser-postcss";
import parserTypescript from "prettier/parser-typescript";

let current;

const ctx: Worker = self as any;

const langToParser = {
  json: "json",
  javascript: "babel",
  typescript: "typescript",
  css: "css",
  less: "less",
  scss: "scss",
  markdown: "markdown",
  graphql: "graphql",
  handlebars: "handlebars",
  html: "html",
  yaml: "yaml",
};

ctx.addEventListener("message", async (event) => {
  if (event.data._current) {
    current = event.data._current;
    return;
  }

  function respond(data) {
    setTimeout(() => {
      if (event.data._id === current) {
        postMessage({ _id: event.data._id, ...data });
      } else {
        postMessage({ _id: event.data._id, canceled: true });
      }
    }, 0);
  }

  try {
    respond({
      pretty: prettier.format(event.data.text, {
        parser: langToParser[event.data.language],
        plugins: [
          parserMarkdown,
          parserHtml,
          parserTypescript,
          parserPostcss,
          parserAngular,
          parserBabel,
          parserGraphql,
          parserFlow,
        ],
        printWidth: 80,
      }),
    });
  } catch (error) {
    respond({ error });
  }
});
