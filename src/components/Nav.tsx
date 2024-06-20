import { useLocation, A } from "@solidjs/router";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetTrigger
} from "~/components/ui/sheet"
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import {FaSolidBars, FaSolidTruck} from "./icons/solidicons";
import { preurl } from "~/lib/data";

export default function Nav() {
  const location = useLocation();
  const active = (path: string) =>
    path == location.pathname ? "border-gray-200" : "border-transparent hover:border-gray-200";
  return (
    <nav class="bg-sky-700 flex justify-between items-center fixed top-0 z-50 w-full">
      <A href="/" class="items-center flex mx-5 my-2">
        <FaSolidTruck/>
      </A>

      <ul class="container justify-end items-center p-3 text-gray-200 hidden md:flex">
        <li class={`border-b-2 ${active(preurl + "/")} mx-1.5 sm:mx-6`}>
          <A href={preurl + "/"}>Home</A>
        </li>
        <li class={`border-b-2 ${active(preurl + "/transporte")} mx-1.5 sm:mx-6`}>
          <A href={preurl + "/transporte"}>Transporte</A>
        </li>
        <li class={`border-b-2 ${active(preurl + "/kurierfahrten")} mx-1.5 sm:mx-6`}>
          <A href={preurl + "/kurierfahrten"}>Kurierfahrten</A>
        </li>
        <li class={`border-b-2 ${active(preurl + "/kontakt")} mx-1.5 sm:mx-6`}>
          <A href={preurl + "/kontakt"}>Kontakt</A>
        </li>
      </ul>

      <Sheet>
        <SheetTrigger as={Button<"button">} variant="ghost" class="md:hidden py-3">
            <FaSolidBars/>
        </SheetTrigger>
        <SheetContent position={"right"} class="bg-sky-700">
          <SheetHeader>
            <SheetTitle class="text-gray-200">
              Rasch
            </SheetTitle>
            <SheetDescription class="text-gray-200">
            Logistics Express
            </SheetDescription>
          </SheetHeader>

          <Separator class="my-4 bg-gray-200 border-gray-200" />
          
          <ul class="container text-gray-200 flex flex-col">
            <li class={`border-b-2 ${active(preurl + "/")} my-1.5 mx-1.5 sm:mx-6`}>
              <A href={preurl + "/"}>Home</A>
            </li>
            <li class={`border-b-2 ${active(preurl + "/transporte")} my-1.5 mx-1.5 sm:mx-6`}>
              <A href={preurl + "/transporte"}>Transporte</A>
            </li>
            <li class={`border-b-2 ${active(preurl + "/kurierfahrten")} my-1.5 mx-1.5 sm:mx-6`}>
              <A href={preurl + "/kurierfahrten"}>Kurierfahrten</A>
            </li>
            <li class={`border-b-2 ${active(preurl + "/kontakt")} my-1.5 mx-1.5 sm:mx-6`}>
              <A href={preurl + "/kontakt"}>Kontakt</A>
            </li>
          </ul>

          <Separator class="my-4 bg-gray-200 border-gray-200" />

          <SheetFooter>
            <ul class="container text-gray-200 flex flex-col">
              <li class={`border-b-2 ${active(preurl + "/impressum")} my-1.5 mx-1.5 sm:mx-6`}>
                <A href={preurl + "/impressum"}>Impressum</A>
              </li>
              <li class={`border-b-2 ${active(preurl + "/datenschutz")} my-1.5 mx-1.5 sm:mx-6`}>
                <A href={preurl + "/datenschutz"}>Datenschutz</A>
              </li>
            </ul>
          </SheetFooter>

        </SheetContent>
      </Sheet>


    </nav>
  );
}
