import { WrapWithProvider } from "./src/components/common/redux/wrap-with-provider";
import type { GatsbySSR } from "gatsby";

export const onRenderBody: GatsbySSR["onRenderBody"] = ({
  setHtmlAttributes,
}) => {
  setHtmlAttributes({
    lang: "ja",
  });
};

export const wrapRootElement = WrapWithProvider;
