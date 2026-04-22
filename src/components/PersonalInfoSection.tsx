import type { PersonalInfo } from './types'

interface PersonalInfoSectionProps {
    personalInfo: PersonalInfo
}

export function PersonalInfoSection({ personalInfo }: PersonalInfoSectionProps) {

    return (
        <section className="cv-section">
            <h2>Personal Information</h2>
            <div className="personal-info">
                <h3>{personalInfo.name}</h3>
                <p><strong>Email:</strong> {personalInfo.email}</p>
                <p><strong>Phone:</strong> {personalInfo.phone}</p>
                <p><strong>Location:</strong> {personalInfo.location}</p>
                {personalInfo.summary && <p><strong>Summary:</strong> {personalInfo.summary}</p>}
            </div>
        </section>
    )
}