import Breadcrumbs from "@/components/breadcrumbs";
import ContactForm from "@/components/contact/form";
import ContactHero from "@/components/contact/hero";
import ContactInfo from "@/components/contact/info";

export default function Contact() {
    return(
        <div>
            <Breadcrumbs />
            <ContactHero />
            <ContactForm />
            <ContactInfo />
        </div>
    )
}