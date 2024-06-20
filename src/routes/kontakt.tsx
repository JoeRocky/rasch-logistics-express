import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";
import { FaSolidPhone, FiMail} from "../components/icons/solidicons";
import { email, phonenumber } from "~/lib/data";

export default function Kontakt() {
  return (
  <>
    <header class="text-center mx-auto text-gray-200 h-[30vh] max-h-[15vh] sm:max-h-[20vh] md:max-h-[25vh] lg:max-h-[30vh] overflow-hidden">
      {/* Background */}
      <div class="absolute w-full h-full max-h-[15vh] sm:max-h-[20vh] md:max-h-[25vh] lg:max-h-[30vh] overflow-hidden flex justify-end items-end">
        <img
          src={"/title_img_kontakt.jpg"}
          class="flex-shrink-0 min-w-full min-h-full max-h-none max-w-full"
          alt="Solid"
        />
      </div>

      {/* Background Gradient */}
      <div class="absolute w-full h-full max-h-[15vh] sm:max-h-[20vh] md:max-h-[25vh] lg:max-h-[30vh]  bg-[rgba(0,0,0,0.5)] sm:bg-transparent sm:bg-gradient-to-r sm:from-[rgba(0,0,0,0.9)] sm:to-[rgba(0,0,0,0.0)]"></div>

      {/* Title */}
      <div class="absolute w-full h-full max-h-[15vh] sm:max-h-[20vh] md:max-h-[25vh] lg:max-h-[30vh] overflow-hidden flex justify-center items-center pt-10">
        <h1 class="uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl my-3">Kontakt</h1>
      </div>
    </header>
    
    <section class="mx-auto text-gray-200 overflow-hidden h-[90vh] px-[10%] sm:px-[20%] md:px-[25%] lg:px-[30%] xl:px-[35%]">
      <div class="my-10">
        <h2 class=" text-xl lg:text-2xl my-2">Kontaktdaten:</h2>
        <div class="flex items-center py-2">
          <div class="mx-2">
            <FiMail/>
          </div>
          <p>{email}</p>
        </div>
        <a href={"tel:" + phonenumber} class="py-2 flex items-center">
          <div class="mx-2">
            <FaSolidPhone/>
          </div>
          <p>{phonenumber}</p>
        </a>
      </div>
      <div class="my-10 w-full">
        <h2 class=" text-xl lg:text-2xl my-2">direkte Nachricht:</h2>
        <div class="w-full my-2">
          <Input type="vorname" id="vorname" placeholder="Vorname *" />
        </div>
        <div class="w-full my-2">
          <Input type="nachname" id="nachname" placeholder="Nachname *" />
        </div>
        <div class="w-full my-2">
          <Input type="email" id="email" placeholder="Email *" />
        </div>
        <div class="w-full my-2">
          <Input type="telefon" id="telefon" placeholder="Telefon" />
        </div>
        <div class="w-full my-2">
          <Textarea placeholder="Nachricht"/>
        </div>
        <div class="w-full my-2 flex justify-end">
          <Button size={"lg"} class="font-bold bg-sky-700 hover:bg-gray-200 text-gray-200 hover:text-sky-700 ">Absenden</Button>
        </div>
      </div>
    </section>
  </>

  );
}
