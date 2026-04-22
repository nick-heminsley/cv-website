import { useState } from 'react'
import type { Education } from './types'

interface EducationFormProps {
    onAdd: (education: Omit<Education, 'id'>) => void
}

export function EducationForm({ onAdd }: EducationFormProps) {
    const [formData, setFormData] = useState({
        degree: '',
        school: '',
        graduationYear: ''
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        onAdd(formData)
        setFormData({ degree: '', school: '', graduationYear: '' })
    }

    return (
        <form onSubmit={handleSubmit} className="cv-form">
            <input
                type="text"
                placeholder="Degree"
                value={formData.degree}
                onChange={(e) => setFormData(prev => ({ ...prev, degree: e.target.value }))}
                required
            />
            <input
                type="text"
                placeholder="School"
                value={formData.school}
                onChange={(e) => setFormData(prev => ({ ...prev, school: e.target.value }))}
                required
            />
            <input
                type="text"
                placeholder="Graduation Year"
                value={formData.graduationYear}
                onChange={(e) => setFormData(prev => ({ ...prev, graduationYear: e.target.value }))}
                required
            />
            <button type="submit">Add Education</button>
        </form>
    )
}