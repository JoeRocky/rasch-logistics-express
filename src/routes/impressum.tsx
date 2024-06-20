import { Title } from "@solidjs/meta";
import { companyName, email, geschäftsinhaber, phonenumber, plz_ort, strasse_hnr, ustid } from "~/lib/data";

export default function Impressum() {
  return (
  <>
    <Title>Impressum - {companyName}</Title>
    <header class="text-center mx-auto text-gray-200 h-[30vh] max-h-[15vh] sm:max-h-[20vh] md:max-h-[25vh] lg:max-h-[30vh] overflow-hidden">
      {/* Background */}
      <div class="absolute w-full h-full max-h-[15vh] sm:max-h-[20vh] md:max-h-[25vh] lg:max-h-[30vh] overflow-hidden flex justify-end items-end">
        <img
          src={import.meta.env.SERVER_BASE_URL + "/title_img_impressum.jpg"}
          class="flex-shrink-0 min-w-full min-h-full max-h-none max-w-full"
          alt="Solid"
        />
      </div>

      {/* Background Gradient */}
      <div class="absolute w-full h-full max-h-[15vh] sm:max-h-[20vh] md:max-h-[25vh] lg:max-h-[30vh]  bg-[rgba(0,0,0,0.5)] sm:bg-transparent sm:bg-gradient-to-r sm:from-[rgba(0,0,0,0.9)] sm:to-[rgba(0,0,0,0.0)]"></div>

      {/* Title */}
      <div class="absolute w-full h-full max-h-[15vh] sm:max-h-[20vh] md:max-h-[25vh] lg:max-h-[30vh] overflow-hidden flex justify-center items-center pt-10">
        <h1 class="uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl my-3">Impressum</h1>
      </div>
    </header>
    
    <section class="mx-auto text-gray-200 overflow-hidden px-[10%] sm:px-[20%] md:px-[25%]">
      <div class="my-10">
        <h2 class=" text-xl lg:text-2xl my-2">Impressum</h2>
        <h2 class=" text-xl lg:text-2xl my-2">HINWEIS: Diese Website ist ein Prototyp und die Kontaktdaten sowie alle rechtlichen Hinweise und Dokumente noch nicht gültig</h2>
        <p>
        Angaben gemäß § 5 TMG:
        </p>
      </div>
      <div class="my-10">
        <h2 class=" text-xl lg:text-2xl my-2">Anschrift:</h2>
        <p>
        {companyName}<br/>
        {strasse_hnr}<br/>
        {plz_ort}<br/>
        USt.-ID: {ustid}<br/>
        Geschäftsinhaber: {geschäftsinhaber}
        </p>
      </div>
      <div class="my-10">
        <h2 class=" text-xl lg:text-2xl my-2">Kontakt</h2>
        <p>
        E-Mail: {email} <br/>
        Tel.: {phonenumber}
        </p>
      </div>
      <div class="my-10">
        <h2 class=" text-xl lg:text-2xl my-2">Haftung für Inhalte</h2>
        <p>
        Alle Inhalte unseres Internetauftritts wurden mit größter Sorgfalt und nach bestem Gewissen erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
        <br/>Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntniserlangung einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von den o.g. Rechtsverletzungen werden wir diese Inhalte unverzüglich entfernen.
        </p>
      </div>
      <div class="my-10">
        <h2 class=" text-xl lg:text-2xl my-2">Urheberrecht</h2>
        <p>
        Die auf unserer Webseite veröffentlichen Inhalte und Werke unterliegen dem deutschen Urheberrecht (http://www.gesetze-im-internet.de/bundesrecht/urhg/gesamt.pdf(link is external)) . Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung des geistigen Eigentums in ideeller und materieller Sicht des Urhebers außerhalb der Grenzen des Urheberrechtes bedürfen der vorherigen schriftlichen Zustimmung des jeweiligen Urhebers i.S.d. Urhebergesetzes (http://www.gesetze-im-internet.de/bundesrecht/urhg/gesamt.pdf(link is external) ). Downloads und Kopien dieser Seite sind nur für den privaten und nicht kommerziellen Gebrauch erlaubt. Sind die Inhalte auf unserer Webseite nicht von uns erstellt wurden, sind die Urheberrechte Dritter zu beachten. Die Inhalte Dritter werden als solche kenntlich gemacht. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte unverzüglich entfernen.
        </p>
      </div>
    </section>
  </>

  );
}
