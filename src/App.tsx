import { useState } from 'react'
import './App.css'
import type { CVData, Experience, Education, Skill, PersonalInfo } from './components'
import { PersonalInfoSection, ExperienceSection, EducationSection, SkillsSection } from './components'

function App() {
  const [cvData, setCvData] = useState<CVData>({
    personalInfo: {
      name: 'Your Name',
      email: 'your.email@example.com',
      phone: '(123) 456-7890',
      location: 'City, State',
      summary: 'A brief summary about yourself.'
    },
    experiences: [],
    educations: [],
    skills: []
  })

  const addExperience = (experience: Omit<Experience, 'id'>) => {
    const newExperience = { ...experience, id: Date.now() }
    setCvData(prev => ({
      ...prev,
      experiences: [...prev.experiences, newExperience]
    }))
  }

  const addEducation = (education: Omit<Education, 'id'>) => {
    const newEducation = { ...education, id: Date.now() }
    setCvData(prev => ({
      ...prev,
      educations: [...prev.educations, newEducation]
    }))
  }

  const addSkill = (skill: Omit<Skill, 'id'>) => {
    const newSkill = { ...skill, id: Date.now() }
    setCvData(prev => ({
      ...prev,
      skills: [...prev.skills, newSkill]
    }))
  }

  const updatePersonalInfo = (field: keyof PersonalInfo, value: string) => {
    setCvData(prev => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, [field]: value }
    }))
  }

  return (
    <div className="cv-app">
      <header className="cv-header">
        <h1>CV Builder</h1>
      </header>

      <main className="cv-content">
        <PersonalInfoSection
          personalInfo={cvData.personalInfo}
          onUpdate={updatePersonalInfo}
        />

        <ExperienceSection
          experiences={cvData.experiences}
          onAdd={addExperience}
        />

        <EducationSection
          educations={cvData.educations}
          onAdd={addEducation}
        />

        <SkillsSection
          skills={cvData.skills}
          onAdd={addSkill}
        />
      </main>
    </div>
  )
}

export default App
