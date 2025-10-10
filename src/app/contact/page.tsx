import Breadcrumbs from "@/components/breadcrumbs";
import ContactForm from "@/components/contact/form";
import ContactHero from "@/components/contact/hero";

export default function Contact() {
    return(
        <div>
            <Breadcrumbs />
            <ContactHero />
            <ContactForm />
        </div>
    )
}