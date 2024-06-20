import { Title } from "@solidjs/meta";
import { email, phonenumber } from "~/lib/data";

export default function Datenschutz() {
  return (
  <>
    <Title>Datenschutz - Raschistics Express</Title>
    <header class="text-center mx-auto text-gray-200 h-[30vh] max-h-[15vh] sm:max-h-[20vh] md:max-h-[25vh] lg:max-h-[30vh] overflow-hidden">
      {/* Background */}
      <div class="absolute w-full h-full max-h-[15vh] sm:max-h-[20vh] md:max-h-[25vh] lg:max-h-[30vh] overflow-hidden flex justify-end items-end">
        <img
          src={import.meta.env.SERVER_BASE_URL + "/title_img_datenschutz.jpg"}
          class="flex-shrink-0 min-w-full min-h-full max-h-none max-w-full"
          alt="Solid"
        />
      </div>

      {/* Background Gradient */}
      <div class="absolute w-full h-full max-h-[15vh] sm:max-h-[20vh] md:max-h-[25vh] lg:max-h-[30vh]  bg-[rgba(0,0,0,0.5)] sm:bg-transparent sm:bg-gradient-to-r sm:from-[rgba(0,0,0,0.9)] sm:to-[rgba(0,0,0,0.0)]"></div>

      {/* Title */}
      <div class="absolute w-full h-full max-h-[15vh] sm:max-h-[20vh] md:max-h-[25vh] lg:max-h-[30vh] overflow-hidden flex justify-center items-center pt-10">
        <h1 class="uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl my-3">Datenschutz</h1>
      </div>
    </header>
    
    <section class="mx-auto text-gray-200 overflow-hidden px-[10%] sm:px-[20%] md:px-[25%]">
      <div class="my-10">
        <h2 class=" text-xl lg:text-2xl my-2">Datenschutzerklärung</h2>
        <h2 class=" text-xl lg:text-2xl my-2">HINWEIß: Diese Website ist ein Prototyp und die Kontaktdaten sowie alle rechtlichen Hinweise und Dokumente noch nicht gültig</h2>
        <p>
        Allgemeiner Hinweis und Pflichtinformationen
        </p>
      </div>
      <div class="my-10">
        <p>
        Benennung der verantwortlichen Stelle<br/>
        Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
        </p>
      </div>
      <div class="my-10">
        <p>
        Rasch Logistics Express<br/>
        ?<br/>
        ?<br/>
        Geschäftsinhaber: ?<br/>
        E-Mail: {email}<br/>
        Tel.: {phonenumber}
        </p>
      </div>
      <div class="my-10">
        <p>
        Die verantwortliche Stelle entscheidet allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.B. Namen, Kontaktdaten o. Ä.).
        <br/>Widerruf Ihrer Einwilligung zur Datenverarbeitung
        <br/>Nur mit Ihrer ausdrücklichen Einwilligung sind einige Vorgänge der Datenverarbeitung möglich. Ein Widerruf Ihrer bereits erteilten Einwilligung ist jederzeit möglich. Für den Widerruf genügt eine formlose Mitteilung per E-Mail. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
        <br/>Recht auf Beschwerde bei der zuständigen Aufsichtsbehörde
        <br/>Als Betroffener steht Ihnen im Falle eines datenschutzrechtlichen Verstoßes ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu. Zuständige Aufsichtsbehörde bezüglich datenschutzrechtlicher Fragen ist der Landesdatenschutzbeauftragte des Bundeslandes, in dem sich der Sitz unseres Unternehmens befindet. Der folgende Link stellt eine Liste der Datenschutzbeauftragten sowie deren Kontaktdaten bereit: https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html.
        <br/>Recht auf Datenübertragbarkeit
        <br/>Ihnen steht das Recht zu, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an Dritte aushändigen zu lassen. Die Bereitstellung erfolgt in einem maschinenlesbaren Format. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.
        <br/>Recht auf Auskunft, Berichtigung, Sperrung, Löschung
        <br/>Sie haben jederzeit im Rahmen der geltenden gesetzlichen Bestimmungen das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, Herkunft der Daten, deren Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Diesbezüglich und auch zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit über die im Impressum aufgeführten Kontaktmöglichkeiten an uns wenden.
        <br/>SSL- bzw. TLS-Verschlüsselung
        <br/>Aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, die Sie an uns als Seitenbetreiber senden, nutzt unsere Website eine SSL-bzw. TLS-Verschlüsselung. Damit sind Daten, die Sie über diese Website übermitteln, für Dritte nicht mitlesbar. Sie erkennen eine verschlüsselte Verbindung an der „https://“ Adresszeile Ihres Browsers und am Schloss-Symbol in der Browserzeile.
        <br/>Newsletter-Daten
        <br/>Zum Versenden unseres Newsletters benötigen wir von Ihnen eine E-Mail-Adresse. Eine Verifizierung der angegebenen E-Mail-Adresse ist notwendig und der Empfang des Newsletters ist einzuwilligen. Ergänzende Daten werden nicht erhoben oder sind freiwillig. Die Verwendung der Daten erfolgt ausschließlich für den Versand des Newsletters.
        <br/>Die bei der Newsletteranmeldung gemachten Daten werden ausschließlich auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) verarbeitet. Ein Widerruf Ihrer bereits erteilten Einwilligung ist jederzeit möglich. Für den Widerruf genügt eine formlose Mitteilung per E-Mail oder Sie melden sich über den "Austragen"-Link im Newsletter ab. Die Rechtmäßigkeit der bereits erfolgten Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt.
        <br/>Zur Einrichtung des Abonnements eingegebene Daten werden im Falle der Abmeldung gelöscht. Sollten diese Daten für andere Zwecke und an anderer Stelle an uns übermittelt worden sein, verbleiben diese weiterhin bei uns.
        </p>
      </div>
    </section>
  </>

  );
}
