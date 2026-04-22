export interface PersonalInfo {
    name: string
    email: string
    phone: string
    location: string
    summary: string
}

export interface Experience {
    id: number
    title: string
    company: string
    startDate: string
    endDate: string
    description: string
}

export interface Education {
    id: number
    degree: string
    school: string
    graduationYear: string
}

export interface Skill {
    id: number
    name: string
    level: string
}

export interface CVData {
    personalInfo: PersonalInfo
    experiences: Experience[]
    educations: Education[]
    skills: Skill[]
}