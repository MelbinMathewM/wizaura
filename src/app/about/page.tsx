import AboutHero from "@/components/about/hero";
import AboutMission from "@/components/about/mission";
import AboutTeam from "@/components/about/team";
import Breadcrumbs from "@/components/breadcrumbs";

export default function About() {
    return (
        <div>
            <Breadcrumbs />
            <AboutHero />
            <AboutMission />
            <AboutTeam />
        </div>
    )
}