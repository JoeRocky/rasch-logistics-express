import { Title } from "@solidjs/meta";
import { A } from "@solidjs/router";
import { twMerge } from "tailwind-merge";
import { buttonVariants } from "~/components/ui/button";

export default function Home() {
  return (
  <>
    <Title>Home - Rasch Logistics Express</Title>
    <header class="text-center mx-auto text-gray-200 h-[90vh] max-h-[90vh] overflow-hidden">
      {/* Background */}
      <div class="absolute w-full h-full max-h-[90vh] overflow-hidden flex justify-center items-center">
        <img
          src={import.meta.env.SERVER_BASE_URL + "/title_img_home.jpg"}
          class="flex-shrink-0 min-h-full min-w-full max-h-[90vh] md:max-h-none max-w-none md:max-w-full"
          alt="Solid"
        />
      </div>

      {/* Background Gradient */}
      <div class="absolute w-full h-full max-h-[90vh] bg-[rgba(0,0,0,0.5)] sm:bg-transparent sm:bg-gradient-to-r sm:from-[rgba(0,0,0,0.9)] sm:to-[rgba(0,0,0,0.0)]"></div>

      {/* Title */}
      <div class="absolute w-full h-full max-h-[90vh] p-20 sm:p-32 md:p-48 xl:p-64 overflow-hidden flex justify-center sm:justify-start items-start sm:items-center">
        <div class="flex flex-col">
          <h1 class="text-gray-200 drop-shadow-[0px_0px_10px_rgba(0,0,0,1)] xl:drop-shadow-none uppercase text-center sm:text-left text-5xl sm:text-6xl md:text-7xl xl:text-8xl leading-[4rem] sm:leading-[5rem] md:leading-[6rem] xl:leading-[8rem]">
            Rasch<br/>
            Logistics<br/>
            Express 
          </h1>
          <div class="flex flex-col sm:flex-row justify-start items-center my-2">
            <img class="my-2 sm:my-0 mx-8 w-20 h-20" width="256" height="256" src={import.meta.env.SERVER_BASE_URL + "/icon.svg"} alt="icon" />
            <A href={"/kontakt"} class={twMerge(buttonVariants({size: "lg"}), "mx-2 font-bold bg-sky-700 hover:bg-gray-200 text-gray-200 hover:text-sky-700 ")}>
              Kontaktiere uns
            </A>
          </div>
        </div>
      </div>
    </header>
    
    {/* Second Section */}
    <section class="mx-auto text-gray-200 overflow-hidden px-[10%] sm:px-[20%] md:px-[25%] py-10">
      <h1 class="uppercase text-2xl lg:text-3xl my-3">Ihr zuverlässiger Transportpartner!</h1>
      <div class="my-10">
        <h2 class=" text-xl lg:text-2xl my-2">Ihr Ansprechpartner für verschiedene Transportaufträge bundesweit</h2>
        <p>
        Für die anspruchsvollen Transporte haben Sie mit uns den richtigen Ansprechpartner gefunden. Wir sind auf diverse Transportdienstleistungen spezialisiert. Sie profitieren von einer professionellen Dienstleistung und haben die Gewissheit, dass Ihre Produkte sicher an den Zielort gelangen. Sprechen Sie uns auf unseren Service an, wir stehen als Transportdienst bereit.
        </p>
      </div>
      <div class="my-10">
        <h2 class=" text-xl lg:text-2xl my-2">Transportdienst</h2>
        <p>
        Zu unserem Angebot gehören auch Eilaufträge. Denn wir richten unsere Dienstleistung flexibel nach Ihrem Bedarf aus und sind mit diesem Konzept erfolgreich am Markt vertreten. Kommen Sie zu uns für Ihren deutschlandweiten Transport. 
        <br/>Für unsere Kunden finden wir immer eine passende Lösung. Dabei spielt es für uns keine Rolle, was Sie transportieren möchten.
        </p>
      </div>
      <div class="my-10">
        <h2 class="text-xl lg:text-2xl my-2">Sonderfahrten und terminierte Transporte<br/> Die Fahrten werden auf Wunsch deutschlandweit durchgeführt. </h2>
      </div>
      <div class="my-10">
        <h2 class="text-xl lg:text-2xl my-2">Wir sind ein Kurierdienst, der wirklich etwas bewegt. Bei uns kommt die bestellte Ware ordnungsgemäß und pünktlich am Bestimmungsort an. Verlassen Sie sich auf unsere Erfahrung und setzen Sie mit uns auf ein modernes Transportunternehmen.</h2>
      </div>
      <div class="my-10">
        <p>
        Wenn Sie maßgeschneiderte Transportlösungen suchen, sind Sie bei uns gut aufgehoben. Wir engagieren uns für Ihren Transportauftrag und stellen den Erfolg sicher. Das ist ein Vorteil für viele gewerbliche Kunden. Wer an zuverlässigen Transportfahrten interessiert ist, kommt bundesweit zu uns. Auf Ihren Auftrag sind wir bereits gespannt und wir freuen uns auf die Zusammenarbeit.
        </p>  
      </div>
    </section>
  </>
  );
}
