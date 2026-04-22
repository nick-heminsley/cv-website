import { useState } from 'react'
import type { Skill } from './types'
import { SkillForm } from './SkillForm'

interface SkillsSectionProps {
    skills: Skill[]
    onAdd: (skill: Omit<Skill, 'id'>) => void
}

export function SkillsSection({ skills, onAdd }: SkillsSectionProps) {
    const [showForm, setShowForm] = useState(false)

    return (
        <section className="cv-section">
            <h2>Skills</h2>
            <button onClick={() => setShowForm(!showForm)}>
                {showForm ? 'Cancel' : 'Add Skill'}
            </button>
            {showForm && <SkillForm onAdd={onAdd} />}
            <div className="skills-list">
                {skills.map(skill => (
                    <div key={skill.id} className="skill-item">
                        <span>{skill.name}</span>
                        <span>{skill.level}</span>
                    </div>
                ))}
            </div>
        </section>
    )
}