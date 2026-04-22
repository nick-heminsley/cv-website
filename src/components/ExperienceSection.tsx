import { useState } from 'react'
import type { Experience } from './types'
import { ExperienceForm } from './ExperienceForm'

interface ExperienceSectionProps {
    experiences: Experience[]
    onAdd: (experience: Omit<Experience, 'id'>) => void
}

export function ExperienceSection({ experiences, onAdd }: ExperienceSectionProps) {
    const [showForm, setShowForm] = useState(false)

    return (
        <section className="cv-section">
            <h2>Experience</h2>
            <button onClick={() => setShowForm(!showForm)}>
                {showForm ? 'Cancel' : 'Add Experience'}
            </button>
            {showForm && <ExperienceForm onAdd={onAdd} />}
            <div className="experience-list">
                {experiences.map(exp => (
                    <div key={exp.id} className="experience-item">
                        <h3>{exp.title}</h3>
                        <p>{exp.company}</p>
                        <p>{exp.startDate} - {exp.endDate}</p>
                        <p>{exp.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}