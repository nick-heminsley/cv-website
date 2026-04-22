import { useState } from 'react'
import type { Skill } from './types'

interface SkillFormProps {
    onAdd: (skill: Omit<Skill, 'id'>) => void
}

export function SkillForm({ onAdd }: SkillFormProps) {
    const [formData, setFormData] = useState({
        name: '',
        level: 'Beginner'
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        onAdd(formData)
        setFormData({ name: '', level: 'Beginner' })
    }

    return (
        <form onSubmit={handleSubmit} className="cv-form">
            <input
                type="text"
                placeholder="Skill Name"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                required
            />
            <select
                value={formData.level}
                onChange={(e) => setFormData(prev => ({ ...prev, level: e.target.value }))}
            >
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
                <option value="Expert">Expert</option>
            </select>
            <button type="submit">Add Skill</button>
        </form>
    )
}