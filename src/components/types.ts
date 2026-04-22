export interface PersonalInfo {
    name: string
    email: string
    phone: string
    location: string
    summary: string
}

export interface Experience {
    id: string
    title: string
    company: string
    location: string
    startDate: string
    endDate: string
    description: string
}

export interface Education {
    id: string
    degree: string
    school: string
    location: string
    graduationYear: string
    gpa?: string
    details?: string
}

export interface Skill {
    id: string
    name: string
    level: string
    category: string
}

export interface CVData {
    personalInfo: PersonalInfo
    experiences: Experience[]
    educations: Education[]
    skills: Skill[]
}