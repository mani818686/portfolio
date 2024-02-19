interface NavItemProps{
    label : string,
    id: number
    link:string
}

interface BackgroundProps{
    Experience:ExperienceProps[],
    Education: EducationProps[]
}

interface ExperienceProps{
    Company:string,
    Duration:string,
    Role:string,
    responsibilities:string[]
}
interface EducationProps{
    College:string,
    level:string,
    Duration:string
}

interface ProjectItemProps{
    image:string,
    title:string,
    link:string,
    info:string,
    skills:string[]
}

interface SkillsProps{
    Programming:string[],
    Frontend:string[],
    Backend:string[],
    Database?:string[],
    Tools?:string[],
    Others?:string[]
}