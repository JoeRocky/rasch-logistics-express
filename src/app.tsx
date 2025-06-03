import { Suspense } from "solid-js";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";

import "@fontsource/inter"
import "~/output.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { ColorModeProvider } from "@kobalte/core";
import { MetaProvider } from "@solidjs/meta";
import { Toaster } from "./components/ui/toast";
import { domainPostfix } from "~/lib/data";

export default function App() {
  return (
    <ColorModeProvider>
    <Router
        base={domainPostfix}
        root={(props) => (
        <>
          <Nav/>
          <MetaProvider>
          <Meta name="author" content="Joseph Rockendorf" />
          <Suspense>{props.children}</Suspense>
          </MetaProvider>
          <Footer/>
          <Toaster/>
        </>
        )}
    >
      <FileRoutes />
    </Router>
    </ColorModeProvider>
  );
}