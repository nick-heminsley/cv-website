import type { Skill } from './types'

interface SkillsSectionProps {
    skills: Skill[]
}

export function SkillsSection({ skills }: SkillsSectionProps) {
    // Group skills by category
    const skillsByCategory = skills.reduce((acc, skill) => {
        if (!acc[skill.category]) {
            acc[skill.category] = []
        }
        acc[skill.category].push(skill)
        return acc
    }, {} as Record<string, typeof skills>)

    return (
        <section className="cv-section">
            <h2>Skills</h2>
            <div className="skills-list">
                {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
                    <div key={category} className="skill-category">
                        <h3>{category}</h3>
                        <div className="skills-grid">
                            {categorySkills.map(skill => (
                                <div key={skill.id} className="skill-item">
                                    <span>{skill.name}</span>
                                    <span>{skill.level}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}