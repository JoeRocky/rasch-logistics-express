import { Title } from "@solidjs/meta";
import { A } from "@solidjs/router";

export default function Kurierfahrten() {
  return (
  <>
  <Title>Kurierfahrten - Rasch Logistics Express</Title>
    <header class="text-center mx-auto text-gray-200 h-[30vh] max-h-[15vh] sm:max-h-[20vh] md:max-h-[25vh] lg:max-h-[30vh] overflow-hidden">
      {/* Background */}
      <div class="absolute w-full h-full max-h-[15vh] sm:max-h-[20vh] md:max-h-[25vh] lg:max-h-[30vh] overflow-hidden flex justify-end items-end">
        <img
          src={import.meta.env.SERVER_BASE_URL + "/title_img_kurierfahrten.jpg"}
          class="flex-shrink-0 min-w-full min-h-full max-h-none max-w-full"
          alt="Solid"
        />
      </div>

      {/* Background Gradient */}
      <div class="absolute w-full h-full max-h-[15vh] sm:max-h-[20vh] md:max-h-[25vh] lg:max-h-[30vh]  bg-[rgba(0,0,0,0.5)] sm:bg-transparent sm:bg-gradient-to-r sm:from-[rgba(0,0,0,0.9)] sm:to-[rgba(0,0,0,0.0)]"></div>

      {/* Title */}
      <div class="absolute w-full h-full max-h-[15vh] sm:max-h-[20vh] md:max-h-[25vh] lg:max-h-[30vh] overflow-hidden flex justify-center items-center pt-10">
        <h1 class="uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl my-3">Kurierfahrten</h1>
      </div>
    </header>
    
    <section class="mx-auto text-gray-200 overflow-hidden px-[10%] sm:px-[20%] md:px-[25%]">
      <div class="my-10">
        <h2 class=" text-xl lg:text-2xl my-2">Wir bringen alles sicher ans Ziel</h2>
        <p>
        Für Direktfahrten und den Kurierdienst sind wir Ihr wichtigster Ansprechpartner in der Region. Wir überzeugen mit einem schnellen Straßentransport ohne Kompromisse und bringen Ihre Produkte von Tür zu Tür. Für die Kurierfahrten wählen wir passende Fahrzeuge aus unserem Bestand aus. Verlassen Sie sich auf uns. Nutzen Sie unser Angebot für Same Day Delivery. Noch am selben Tag oder sonst schnellstmöglich stellen wir alles wie gewünscht zu. Die Abholung erfolgt punktgenau und ebenso zuverlässig wie die Zustellung. Gerne beraten wir Sie zu den Möglichkeiten, die Ihnen unser Service zum Beispiel für Fahrten für Sondertransporte bietet.
        </p>
      </div>
      <div class="my-10">
        <h2 class=" text-xl lg:text-2xl my-2">Kurierdienst mit viel Erfahrung jetzt für Sie im Einsatz</h2>
        <p>
        Wir bieten Ihnen maßgeschneiderte Transportlösungen an und stellen damit Ihre Zufriedenheit als gewerblicher Kunde sicher. Unsere Transporte sind für unterschiedliche Aufträge hervorragend geeignet. Wir übernehmen hier Aufgaben, die nur wenige Kurierdienste abdecken. Sie haben mit uns einen zuverlässigen Partner für Ihr Transportanliegen gefunden. Eine erstklassige Qualität der Auftragsausführung ist bei uns der Standard. Überzeugen Sie sich am besten selbst davon. Wir bewegen etwas und stellen Ihnen dafür unsere dynamische Transporte zur Verfügung.
        </p>
      </div>
      <div class="my-10">
        <p>
        Planbare Kosten gehören bei uns immer dazu. Denn wir setzen auf eine ökonomisch optimierte Routenführung. Das klingt für Sie interessant? Dann freuen wir uns bereits auf Ihre Anfrage.
        </p>
      </div>
    </section>
  </>

  );
}
