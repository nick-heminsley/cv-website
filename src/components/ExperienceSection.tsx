import type { Experience } from './types'

interface ExperienceSectionProps {
    experiences: Experience[]
}

export function ExperienceSection({ experiences }: ExperienceSectionProps) {
    return (
        <section className="cv-section">
            <h2>Experience</h2>
            <div className="experience-list">
                {experiences.map(exp => (
                    <div key={exp.id} className="experience-item">
                        <h3>{exp.title}</h3>
                        <p>{exp.company} - {exp.location}</p>
                        <p>{exp.startDate} - {exp.endDate}</p>
                        <p>{exp.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}