import type { Education } from './types'

interface EducationSectionProps {
    educations: Education[]
}

export function EducationSection({ educations }: EducationSectionProps) {
    return (
        <section className="cv-section">
            <h2>Education</h2>
            <div className="education-list">
                {educations.map(edu => (
                    <div key={edu.id} className="education-item">
                        <h3>{edu.degree}</h3>
                        <p>{edu.school} - {edu.location}</p>
                        <p>{edu.graduationYear}{edu.gpa && ` • GPA: ${edu.gpa}`}</p>
                        {edu.details && <p>{edu.details}</p>}
                    </div>
                ))}
            </div>
        </section>
    )
}