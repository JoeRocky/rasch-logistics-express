import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";
import { FaSolidPhone, FiMail} from "../components/icons/solidicons";
import { companyName, email, phonenumber } from "~/lib/data";
import { Title } from "@solidjs/meta";
import { createSignal } from "solid-js";
import { showToast } from "~/components/ui/toast";

export default function Kontakt() {

  const [firstName, setFirstName] = createSignal("");
  const [lastName, setLastName] = createSignal("");
  const [emailAddress, setEmailAddress] = createSignal("");
  const [phoneNumber, setPhoneNumber] = createSignal("");
  const [message, setMessage] = createSignal("");

  const [firstNameMissing, setFirstNameMissing] = createSignal(false);
  const [lastNameMissing, setLastNameMissing] = createSignal(false);
  const [emailAddressMissing, setEmailAddressMissing] = createSignal(false);
  const [messageMissing, setMessageMissing] = createSignal(false);

  function sendMessage() {
    if (firstName() == "") {setFirstNameMissing(true);} else {setFirstNameMissing(false);}
    if (lastName() == "") {setLastNameMissing(true);} else {setLastNameMissing(false);}
    if (emailAddress() == "") {setEmailAddressMissing(true);} else {setEmailAddressMissing(false);}
    if (message() == "") {setMessageMissing(true);} else {setMessageMissing(false);}

    if (!(firstNameMissing() || lastNameMissing() || emailAddressMissing() || messageMissing())) {

      showToast({
        title: "Email versand in Arbeit...",
      });
      console.log("Email versand in Arbeit...");
      
      fetch("https://formsubmit.co/ajax/joemaxrocky@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      },
      body: JSON.stringify({
          name: firstName() + " " + lastName(),
          email: emailAddress(),
          message: firstName() + " " + lastName() + "\n" + 
            "Email: " + emailAddress() + "\n" + 
            "Telefon: " + ((phoneNumber() == "") ? "?" : phoneNumber()) + "\n\n" + 
            message(),
      })
    })
      .then(response => response.json()
        .then(data => {
          if (data.success) {
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
        })
        .catch(error => {
          showToast({
            title: "Error:",
            description: "Email konte nicht gesendet werden.",
            variant: "error",
          })
          console.log("Error: response json fetch");
        })
      ).catch(error => {
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
    <header class="text-center mx-auto text-gray-200 h-[30vh] max-h-[15vh] sm:max-h-[20vh] md:max-h-[25vh] lg:max-h-[30vh] overflow-hidden">
      {/* Background */}
      <div class="absolute w-full h-full max-h-[15vh] sm:max-h-[20vh] md:max-h-[25vh] lg:max-h-[30vh] overflow-hidden flex justify-end items-end">
        <img
          src={import.meta.env.SERVER_BASE_URL + "/title_img_kontakt.jpg"}
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
        <h2 class=" text-xl lg:text-2xl my-2">HINWEIS: Diese Website ist ein Prototyp und die Kontaktdaten sowie alle rechtlichen Dokumente noch nicht gültig</h2>
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
