import { preurl } from "~/lib/data";


export default function Transporte() {
  return (
  <>
    <header class="text-center mx-auto text-gray-200 h-[30vh] max-h-[15vh] sm:max-h-[20vh] md:max-h-[25vh] lg:max-h-[30vh] overflow-hidden">
      {/* Background */}
      <div class="absolute w-full h-full max-h-[15vh] sm:max-h-[20vh] md:max-h-[25vh] lg:max-h-[30vh] overflow-hidden flex justify-end items-end">
        <img
          src={preurl + "/title_img_transporte.jpg"}
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
          Welche Güter Sie auch transportieren möchten uns was immer Ihre Anforderungen sind: Wir setzen die Transportfahrten zu Ihrer Zufriedenheit um. Dabei erhalten Sie bei uns alle Leistungen aus einer Hand, denn wir beraten, planen, verladen und führen den Transport durch. Verlassen Sie sich auf unsere Erfahrung und Fähigkeiten in diesem Bereich. Zögern Sie nicht und sprechen Sie uns auf unseren Kurierdienst an. Wir freuen uns auf Sie.
        </p>
      </div>
      <div class="my-10">
        <h2 class=" text-xl lg:text-2xl my-2">Transportfahrten – profitieren Sie von unserem flexiblen Service</h2>
        <p>
        Wir führen die Fahrten für Sondertransporte und alle anderen nach Ihren Vorgaben durch. Dazu gehört auch, dass wir in ganz Deutschland für Sie unterwegs sind. Ihre kundenindividuellen Anforderungen stehen immer im Vordergrund.
        </p>
      </div>
      <div class="my-10">
        <h2 class=" text-xl lg:text-2xl my-2">Fahrten für Sondertransporte</h2>
        <p>
        Bei uns kommen viele Vorteile zusammen. Wir bieten transparente Preise auf einem angemessenen Niveau an und überzeugen mit unserer Pünktlichkeit. Dabei spielt es für uns keine Rolle, was Sie transportieren möchten. Kunst ist bei uns ebenso möglich wie Maschinen. Wir sind ein Kurierdienst, der wirklich etwas bewegt.
Bei uns sind Sie richtig, wenn alles pünktlich und ordnungsgemäß am Zielort ankommen soll. Auf unsere erstklassige Qualität können Sie sich verlassen. Und wir sind ein Unternehmen, das Verantwortung für seine Kunden, die Mitarbeiter und die Umwelt übernimmt. Wenn das für Sie überzeugend klingt und Sie an maßgeschneiderten Transportlösungen interessiert sind, freuen wir uns jetzt auf Ihre Anfrage.
        </p>
      </div>
    </section>
  </>

  );
}