import type { PersonalInfo } from './types'

interface PersonalInfoSectionProps {
    personalInfo: PersonalInfo
    onUpdate: (field: keyof PersonalInfo, value: string) => void
}

export function PersonalInfoSection({ personalInfo, onUpdate }: PersonalInfoSectionProps) {
    return (
        <section className="cv-section">
            <h2>Personal Information</h2>
            <div className="personal-info">
                <input
                    type="text"
                    placeholder="Full Name"
                    value={personalInfo.name}
                    onChange={(e) => onUpdate('name', e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={personalInfo.email}
                    onChange={(e) => onUpdate('email', e.target.value)}
                />
                <input
                    type="tel"
                    placeholder="Phone"
                    value={personalInfo.phone}
                    onChange={(e) => onUpdate('phone', e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Location"
                    value={personalInfo.location}
                    onChange={(e) => onUpdate('location', e.target.value)}
                />
                <textarea
                    placeholder="Professional Summary"
                    value={personalInfo.summary}
                    onChange={(e) => onUpdate('summary', e.target.value)}
                    rows={3}
                />
            </div>
        </section>
    )
}