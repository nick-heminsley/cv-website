import { useState } from 'react'
import type { Education } from './types'
import { EducationForm } from './EducationForm'

interface EducationSectionProps {
    educations: Education[]
    onAdd: (education: Omit<Education, 'id'>) => void
}

export function EducationSection({ educations, onAdd }: EducationSectionProps) {
    const [showForm, setShowForm] = useState(false)

    return (
        <section className="cv-section">
            <h2>Education</h2>
            <button onClick={() => setShowForm(!showForm)}>
                {showForm ? 'Cancel' : 'Add Education'}
            </button>
            {showForm && <EducationForm onAdd={onAdd} />}
            <div className="education-list">
                {educations.map(edu => (
                    <div key={edu.id} className="education-item">
                        <h3>{edu.degree}</h3>
                        <p>{edu.school}</p>
                        <p>{edu.graduationYear}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}