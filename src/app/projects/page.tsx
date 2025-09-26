import Breadcrumbs from "@/components/breadcrumbs";
import ProjectsCTA from "@/components/projects/cta";
import ProjectsHero from "@/components/projects/hero";
import ProjectsList from "@/components/projects/list";

export default function Projects() {
    return (
        <div>
            <Breadcrumbs />
            <ProjectsHero />
            <ProjectsList />
            <ProjectsCTA />
        </div>
    )
}