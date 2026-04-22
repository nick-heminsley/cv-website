import { useState } from 'react'
import type { Experience } from './types'

interface ExperienceFormProps {
    onAdd: (experience: Omit<Experience, 'id'>) => void
}

export function ExperienceForm({ onAdd }: ExperienceFormProps) {
    const [formData, setFormData] = useState({
        title: '',
        company: '',
        startDate: '',
        endDate: '',
        description: ''
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        onAdd(formData)
        setFormData({ title: '', company: '', startDate: '', endDate: '', description: '' })
    }

    return (
        <form onSubmit={handleSubmit} className="cv-form">
            <input
                type="text"
                placeholder="Job Title"
                value={formData.title}
                onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                required
            />
            <input
                type="text"
                placeholder="Company"
                value={formData.company}
                onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                required
            />
            <input
                type="text"
                placeholder="Start Date (e.g., Jan 2020)"
                value={formData.startDate}
                onChange={(e) => setFormData(prev => ({ ...prev, startDate: e.target.value }))}
                required
            />
            <input
                type="text"
                placeholder="End Date (e.g., Present)"
                value={formData.endDate}
                onChange={(e) => setFormData(prev => ({ ...prev, endDate: e.target.value }))}
                required
            />
            <textarea
                placeholder="Job Description"
                value={formData.description}
                onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                rows={3}
                required
            />
            <button type="submit">Add Experience</button>
        </form>
    )
}