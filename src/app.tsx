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

export default function App() {
  return (
    <ColorModeProvider>
    <Router
        base={import.meta.env.SERVER_BASE_URL}
        root={(props) => (
        <>
          <Nav/>
          <MetaProvider>
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