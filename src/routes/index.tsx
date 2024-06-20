import { Title } from "@solidjs/meta";
import { A } from "@solidjs/router";
import { twMerge } from "tailwind-merge";
import { buttonVariants } from "~/components/ui/button";
import { companyName } from "~/lib/data";
import { insertLineBreaks } from "~/lib/utils";

export default function Home() {
  return (
  <>
    <Title>Home - {companyName}</Title>
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
          {insertLineBreaks(companyName)}
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
        <h2 class=" text-xl lg:text-2xl my-2">Ihr Experte für bundesweite Transportlösungen</h2>
        <p>
        Herzlich willkommen bei Ihrem kompetenten Ansprechpartner für vielfältige Transportaufträge in ganz Deutschland. Wir bieten spezialisierte Transportdienstleistungen, die höchsten Ansprüchen gerecht werden. Mit uns profitieren Sie von professionellen Dienstleistungen und können sicher sein, dass Ihre Produkte zuverlässig und sicher ihr Ziel erreichen. Kontaktieren Sie uns und erfahren Sie mehr über unseren umfassenden Service.
        </p>
      </div>

      <div class="my-10">
        <h2 class=" text-xl lg:text-2xl my-2">Unsere Transportdienstleistungen</h2>
        <p>
        Wir bieten flexible und maßgeschneiderte Transportlösungen, die genau auf Ihre Bedürfnisse abgestimmt sind. Dazu gehören auch Eilaufträge, die wir schnell und zuverlässig ausführen. Unser Erfolgsgeheimnis liegt in unserer Anpassungsfähigkeit und unserer Kundenorientierung. Für Ihren deutschlandweiten Transport sind wir der ideale Partner. Egal, was Sie transportieren möchten – wir finden stets die passende Lösung für Sie.
        </p>
      </div>

      <div class="my-10">
        <h2 class=" text-xl lg:text-2xl my-2">Sonderfahrten und termingerechte Transporte</h2>
        <p>
        Unsere Sonderfahrten und termingerechten Transporte führen wir auf Wunsch in ganz Deutschland durch.
        </p>
      </div>

      <div class="my-10">
        <h2 class=" text-xl lg:text-2xl my-2">Ihr zuverlässiger Kurierdienst</h2>
        <p>
        Wir sind ein Kurierdienst, der wirklich etwas bewegt. Bei uns kommt Ihre bestellte Ware ordnungsgemäß und pünktlich an ihrem Bestimmungsort an. Vertrauen Sie auf unsere Erfahrung und setzen Sie auf ein modernes Transportunternehmen, das Ihre Anforderungen erfüllt.
        </p>
      </div>

      <div class="my-10">
        <p>
        Wenn Sie maßgeschneiderte Transportlösungen suchen, sind Sie bei uns genau richtig. Wir engagieren uns voll und ganz für Ihren Transportauftrag und stellen sicher, dass er erfolgreich abgewickelt wird. Diesen Vorteil schätzen viele unserer gewerblichen Kunden. Wer zuverlässige Transportdienstleistungen sucht, kommt bundesweit zu uns. Wir freuen uns auf Ihren Auftrag und auf eine erfolgreiche Zusammenarbeit.
        </p>
      </div>


    </section>
  </>
  );
}
