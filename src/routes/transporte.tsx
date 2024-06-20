import { Title } from "@solidjs/meta";
import { companyName } from "~/lib/data";

export default function Transporte() {
  return (
  <>
    <Title>Transporte - {companyName}</Title>
    <header class="text-center mx-auto text-gray-200 h-[30vh] max-h-[15vh] sm:max-h-[20vh] md:max-h-[25vh] lg:max-h-[30vh] overflow-hidden">
      {/* Background */}
      <div class="absolute w-full h-full max-h-[15vh] sm:max-h-[20vh] md:max-h-[25vh] lg:max-h-[30vh] overflow-hidden flex justify-end items-end">
        <img
          src={import.meta.env.SERVER_BASE_URL + "/title_img_transporte.jpg"}
          class="flex-shrink-0 min-w-full min-h-full max-h-none max-w-full"
          alt="Solid"
        />
      </div>

      {/* Background Gradient */}
      <div class="absolute w-full h-full max-h-[15vh] sm:max-h-[20vh] md:max-h-[25vh] lg:max-h-[30vh]  bg-[rgba(0,0,0,0.5)] sm:bg-transparent sm:bg-gradient-to-r sm:from-[rgba(0,0,0,0.9)] sm:to-[rgba(0,0,0,0.0)]"></div>

      {/* Title */}
      <div class="absolute w-full h-full max-h-[15vh] sm:max-h-[20vh] md:max-h-[25vh] lg:max-h-[30vh] overflow-hidden flex justify-center items-center pt-10">
        <h1 class="uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl my-3">Transportfahrten</h1>
      </div>
    </header>
    
    <section class="mx-auto text-gray-200 overflow-hidden px-[10%] sm:px-[20%] md:px-[25%]">

      <div class="my-10">
        <h2 class=" text-xl lg:text-2xl my-2">Die passende Lösung für Ihren Transport</h2>
        <p>
        Egal, welche Güter Sie transportieren möchten oder welche Anforderungen Sie haben: Wir setzen Ihre Transportfahrten zu Ihrer vollsten Zufriedenheit um. Bei uns erhalten Sie alle Leistungen aus einer Hand – von der Beratung über die Planung und Verladung bis hin zur Durchführung des Transports. Vertrauen Sie auf unsere langjährige Erfahrung und unser Know-how in diesem Bereich. Zögern Sie nicht, uns auf unseren Kurierdienst anzusprechen. Wir freuen uns darauf, Sie zu unterstützen.
        </p>
      </div>

      <div class="my-10">
        <h2 class=" text-xl lg:text-2xl my-2">Transportfahrten – profitieren Sie von unserem flexiblen Service</h2>
        <p>
        Unsere Transportfahrten werden genau nach Ihren Vorgaben durchgeführt. Wir sind in ganz Deutschland für Sie unterwegs und stellen sicher, dass Ihre individuellen Anforderungen stets im Vordergrund stehen. Ob Sondertransporte oder reguläre Lieferungen – wir sind flexibel und zuverlässig.
        </p>
      </div>

      <div class="my-10">
        <h2 class=" text-xl lg:text-2xl my-2">Fahrten für Sondertransporte</h2>
        <p>
        Wir bieten Ihnen zahlreiche Vorteile. Unsere transparenten und fairen Preise sowie unsere Pünktlichkeit überzeugen auf ganzer Linie. Ob Kunstwerke, Maschinen oder andere Güter – wir transportieren alles mit größter Sorgfalt. Als Kurierdienst, der wirklich etwas bewegt, stellen wir sicher, dass Ihre Sendungen pünktlich und ordnungsgemäß am Zielort ankommen. Unsere erstklassige Qualität und unser Engagement für Kunden, Mitarbeiter und Umwelt machen uns zu einem verlässlichen Partner. Wenn Sie maßgeschneiderte Transportlösungen suchen, freuen wir uns auf Ihre Anfrage.
        </p>
      </div>
    </section>
  </>

  );
}
