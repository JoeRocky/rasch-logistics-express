import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";
import { FaSolidPhone, FiMail} from "../components/icons/solidicons";
import { companyName, domain, domainPostfix, email, phonenumber } from "~/lib/data";
import { Meta, Title } from "@solidjs/meta";
import { createSignal } from "solid-js";
import { showToast } from "~/components/ui/toast";

export default function Kontakt() {

  const [firstName, setFirstName] = createSignal("");
  const [lastName, setLastName] = createSignal("");
  const [emailAddress, setEmailAddress] = createSignal("");
  const [phoneNumber, setPhoneNumber] = createSignal("");
  const [subject, setSubject] = createSignal("");
  const [message, setMessage] = createSignal("");

  const [firstNameMissing, setFirstNameMissing] = createSignal(false);
  const [lastNameMissing, setLastNameMissing] = createSignal(false);
  const [emailAddressMissing, setEmailAddressMissing] = createSignal(false);
  const [subjectMissing, setSubjectMissing] = createSignal(false);
  const [messageMissing, setMessageMissing] = createSignal(false);

  function sendMessage() {
    if (firstName() == "") {setFirstNameMissing(true);} else {setFirstNameMissing(false);}
    if (lastName() == "") {setLastNameMissing(true);} else {setLastNameMissing(false);}
    if (emailAddress() == "") {setEmailAddressMissing(true);} else {setEmailAddressMissing(false);}
    if (subject() == "") {setSubjectMissing(true);} else {setSubjectMissing(false);}
    if (message() == "") {setMessageMissing(true);} else {setMessageMissing(false);}

    if (!(firstNameMissing() || lastNameMissing() || emailAddressMissing() || messageMissing() || subjectMissing())) {

      showToast({
        title: "Email versand in Arbeit...",
      });
      console.log("Email versand in Arbeit...");

      fetch("https://rockendorf.eu:8001/send_mail_to_info_rasch_logistics_express", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json',
      },
      body: JSON.stringify({
          name: firstName() + " " + lastName(),
          email: emailAddress(),
          phonenumber: ((phoneNumber() == "") ? "?" : phoneNumber()),
          subject: subject(),
          text: message(),
      })
      })
      .then(response => {
        if (response.ok) {
          showToast({
            title: "Erfolg!",
            description: "die Email wurde gesendet.",
            variant: "success",
          })
          console.log("Erfolg!");
        } else {
          showToast({
            title: "Error:",
            description: "Email konte nicht gesendet werden.",
            variant: "error",
          })
          console.log("Error: response");
        }
      }).catch(error => {
        showToast({
          title: "Error:",
          description: "Email konte nicht gesendet werden.",
          variant: "error",
        })
        console.log("Error: fetch");
      });

    }
  }

  return (
  <>
    <Title>Kontakt - {companyName}</Title>

    {/* Meta Tags */}
    <Meta name="author" content="Joseph Rockendorf" />
    
    <Meta name="description" content="Kontaktieren sie uns. Ihr Partner für schnelle und zuverlässige Kurierfahrten." />
    <Meta name="keywords" content="Kurierfahrten, Kurierdienst, Direktfahrten, Same Day Delivery, Transportlösungen, schnelle Transporte, zuverlässige Kurierdienste" />
    
    <Meta property="og:title" content={"Kontakt - " + companyName} />
    <Meta property="og:description" content="Kontaktieren sie uns. Ihr Partner für schnelle und zuverlässige Kurierfahrten." />
    <Meta property="og:image" content={domain + "/title_img_kontakt.jpg"} />
    <Meta property="og:url" content={domain}/>
    <Meta property="og:type" content="website"/>

    <Meta name="twitter:card" content="summary_large_image"/>
    <Meta name="twitter:title" content={"Kontakt - " + companyName} />
    <Meta name="twitter:description" content="Kontaktieren sie uns. Ihr Partner für schnelle und zuverlässige Kurierfahrten." />
    <Meta name="twitter:image" content={domain + "/title_img_kontakt.jpg"} />


    
    <header class="text-center mx-auto text-gray-200 h-[30vh] max-h-[15vh] sm:max-h-[20vh] md:max-h-[25vh] lg:max-h-[30vh] overflow-hidden">
      {/* Background */}
      <div class="absolute w-full h-full max-h-[15vh] sm:max-h-[20vh] md:max-h-[25vh] lg:max-h-[30vh] overflow-hidden flex justify-end items-end">
        <img
          src={domainPostfix + "/title_img_kontakt.jpg"}
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
    
    <section class="mx-auto text-gray-200 overflow-hidden px-[10%] sm:px-[20%] md:px-[25%] lg:px-[30%] xl:px-[35%]">
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
          <Input class={firstNameMissing() ? "border-error-foreground" : "border-input"} type="vorname" id="vorname" placeholder="Vorname *" onChange={(e) => setFirstName(e.currentTarget.value)}/>
        </div>
        <div class="w-full my-2">
          <Input class={lastNameMissing() ? "border-error-foreground" : "border-input"} type="nachname" id="nachname" placeholder="Nachname *" onChange={(e) => setLastName(e.currentTarget.value)}/>
        </div>
        <div class="w-full my-2">
          <Input class={emailAddressMissing() ? "border-error-foreground" : "border-input"} type="email" id="email" placeholder="Email *" onChange={(e) => setEmailAddress(e.currentTarget.value)}/>
        </div>
        <div class="w-full my-2">
          <Input type="telefon" id="telefon" placeholder="Telefon" onChange={(e) => setPhoneNumber(e.currentTarget.value)}/>
        </div>
        <div class="w-full my-2">
          <Input class={subjectMissing() ? "border-error-foreground" : "border-input"} type="subject" id="subject" placeholder="Betreff *" onChange={(e) => setSubject(e.currentTarget.value)}/>
        </div>
        <div class="w-full my-2">
          <Textarea class={messageMissing() ? "border-error-foreground" : "border-input"} placeholder="Nachricht *" onChange={(e) => setMessage(e.currentTarget.value)}/>
        </div>
        <div class="w-full my-2 flex justify-end">
          <Button onClick={sendMessage} size={"lg"} class="font-bold bg-sky-700 hover:bg-gray-200 text-gray-200 hover:text-sky-700 ">Absenden</Button>
        </div>
      </div>
    </section>
  </>

  );
}
