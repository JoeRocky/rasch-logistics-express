import { Meta, Title } from "@solidjs/meta";
import { companyName, domain, domainPostfix } from "~/lib/data";

export default function Kurierfahrten() {
  return (
  <>
    <Title>Kurierfahrten - {companyName}</Title>

    {/* Meta Tags */}
    <Meta name="author" content="Joseph Rockendorf" />
    
    <Meta name="description" content="Ihr Partner für schnelle und zuverlässige Kurierfahrten. Nutzen Sie unseren Kurierdienst für Same Day Delivery und maßgeschneiderte Transportlösungen." />
    <Meta name="keywords" content="Kurierfahrten, Kurierdienst, Direktfahrten, Same Day Delivery, Transportlösungen, schnelle Transporte, zuverlässige Kurierdienste" />
    
    <Meta property="og:title" content={"Kurierfahrten - " + companyName} />
    <Meta property="og:description" content="Ihr Partner für schnelle und zuverlässige Kurierfahrten. Nutzen Sie unseren Kurierdienst für Same Day Delivery und maßgeschneiderte Transportlösungen." />
    <Meta property="og:image" content={domain + "/title_img_kurierfahrten.jpg"} />
    <Meta property="og:url" content={domain}/>
    <Meta property="og:type" content="website"/>

    <Meta name="twitter:card" content="summary_large_image"/>
    <Meta name="twitter:title" content={"Kurierfahrten - " + companyName} />
    <Meta name="twitter:description" content="Ihr Partner für schnelle und zuverlässige Kurierfahrten. Nutzen Sie unseren Kurierdienst für Same Day Delivery und maßgeschneiderte Transportlösungen." />
    <Meta name="twitter:image" content={domain + "/title_img_kurierfahrten.jpg"} />



    <header class="text-center mx-auto text-gray-200 h-[30vh] max-h-[15vh] sm:max-h-[20vh] md:max-h-[25vh] lg:max-h-[30vh] overflow-hidden">
      {/* Background */}
      <div class="absolute w-full h-full max-h-[15vh] sm:max-h-[20vh] md:max-h-[25vh] lg:max-h-[30vh] overflow-hidden flex justify-end items-end">
        <img
          src={domainPostfix + "/title_img_kurierfahrten.jpg"}
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
        Für Direktfahrten und Kurierdienste sind wir Ihr zuverlässiger Ansprechpartner in der Region. Wir bieten schnellen Straßentransport ohne Kompromisse und bringen Ihre Produkte direkt von Tür zu Tür. Für Kurierfahrten wählen wir die passenden Fahrzeuge aus unserem umfangreichen Fuhrpark aus. Nutzen Sie unser Angebot für Same Day Delivery – noch am selben Tag oder so schnell wie möglich stellen wir Ihre Sendungen zu. Sowohl die Abholung als auch die Zustellung erfolgen punktgenau und zuverlässig. Lassen Sie sich von uns zu den vielfältigen Möglichkeiten unseres Services, einschließlich Sondertransporte, beraten.
        </p>
      </div>

      <div class="my-10">
        <h2 class=" text-xl lg:text-2xl my-2">Kurierdienst mit viel Erfahrung - jetzt für Sie im Einsatz</h2>
        <p>
        Wir bieten maßgeschneiderte Transportlösungen und garantieren damit Ihre Zufriedenheit als gewerblicher Kunde. Unsere Transporte sind ideal für verschiedenste Aufträge und decken Aufgaben ab, die nur wenige Kurierdienste leisten können. Mit uns haben Sie einen verlässlichen Partner für Ihr Transportanliegen gefunden. Erstklassige Qualität in der Auftragsausführung ist bei uns der Standard. Überzeugen Sie sich selbst von unserem Engagement. Wir setzen dynamische Transportlösungen ein, um Ihre Fracht sicher und pünktlich zu liefern.
        </p>
      </div>

      <div class="my-10">
        <p>
        Unsere transparenten und planbaren Kosten sind ein weiterer Vorteil. Wir optimieren unsere Routenführung ökonomisch, um Ihnen kosteneffiziente Lösungen anzubieten. Klingt das interessant für Sie? Dann freuen wir uns auf Ihre Anfrage.
        </p>
      </div>

    </section>
  </>

  );
}
