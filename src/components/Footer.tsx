import { A } from "@solidjs/router";
import { FaSolidPhone, FiMail} from "./icons/solidicons";
import { Separator } from "./ui/separator";
import { buttonVariants } from "./ui/button";
import { twMerge } from "tailwind-merge";
import { email, openingDays, openingHours, phonenumber } from "~/lib/data";

export default function Footer() {
  return (
    <footer class="w-full text-gray-200 bg-sky-700">
      
      <ul class="flex flex-col lg:flex-row px-5 py-2">

        <li class="w-full p-5">
          <div class="py-2">
            <h1 class="text-2xl">Kontakt</h1>
            <p>Kontaktieren Sie uns!</p>
          </div>
          <div class="py-2">
            <p>Öffnungszeiten:</p>
            <p>{openingDays}</p>
            <p>{openingHours}</p>
          </div>
        </li>

        <li class="p-5 list-item lg:hidden">
          <Separator class="bg-gray-200 border-gray-200"/>
        </li> 
        <li class="p-5 hidden lg:list-item">
          <Separator orientation="vertical" class="bg-gray-200 border-gray-200"/>
        </li>

        <li class="w-full p-5">
          <div class="py-2">
            <h1 class="text-2xl">Telefon</h1>
            <p>Rufen sie uns an!</p>
          </div>
          <a href={"tel:" + phonenumber} class="py-2 flex items-center">
            <div class="mx-2">
              <FaSolidPhone/>
            </div>
            <p>{phonenumber}</p>
          </a>
        </li>

        <li class="p-5 list-item lg:hidden">
          <Separator class="bg-gray-200 border-gray-200"/>
        </li> 
        <li class="p-5 hidden lg:list-item">
          <Separator orientation="vertical" class="bg-gray-200 border-gray-200"/>
        </li>

        <li class="w-full p-5">
          <div class="py-2">
            <h1 class="text-2xl">Nachricht</h1>
            <p>Schreiben sie uns eine Nachricht!</p>
          </div>
          <div class="flex items-center py-2">
              <div class="mx-2">
                <FiMail/>
              </div>
              <p>{email}</p>
          </div>
          <div class="mx-2">
            <A href={"/kontakt"} class={twMerge(buttonVariants({variant: "outline"}), " font-bold bg-sky-700 hover:bg-gray-200 text-gray-200 hover:text-sky-700 border-gray-200")}>
              Kontaktieren Sie uns!
            </A>
          </div>
        </li>

        <li class="p-5 list-item lg:hidden">
          <Separator class="bg-gray-200 border-gray-200"/>
        </li> 
        <li class="p-5 hidden lg:list-item">
          <Separator orientation="vertical" class="bg-gray-200 border-gray-200"/>
        </li>

        <li class="w-full p-5">
          <div class="py-2">
            <h1 class="text-2xl">Rechtliches</h1>
            <p>rechtliche Unterlagen</p>
          </div>
          <div class="py-2 flex flex-col">
            <A href={"/impressum"} class="hover:underline">Impressum</A>
            <A href={"/datenschutz"} class="py-1 hover:underline">Datenschutz</A>
          </div>
        </li>

      </ul>
    </footer>
  );
}
