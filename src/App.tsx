import { useState, useEffect } from 'react'
import './App.css'
import type { CVData } from './components'
import { PersonalInfoSection, ExperienceSection, EducationSection, SkillsSection } from './components'
import { loadCVData } from './utils/dataLoader'

function App() {
  const [cvData, setCvData] = useState<CVData>({
    personalInfo: {
      name: 'Loading...',
      email: '',
      phone: '',
      location: '',
      summary: ''
    },
    experiences: [],
    educations: [],
    skills: []
  })

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadCV = async () => {
      try {
        const data = await loadCVData()
        setCvData(data)
      } catch (error) {
        console.error('Failed to load CV:', error)
      } finally {
        setLoading(false)
      }
    }

    loadCV()
  }, [])

  if (loading) {
    return (
      <div className="cv-app">
        <header className="cv-header">
          <h1>My CV</h1>
        </header>
        <main className="cv-content">
          <div style={{ textAlign: 'center', padding: '50px' }}>
            <p>Loading CV data...</p>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="cv-app">
      <header className="cv-header">
        <h1>My CV</h1>
        <p style={{ fontSize: '14px', margin: '10px 0 0 0', color: '#666' }}>
          Edit your CV by modifying the <code>cv.json</code> file in the public folder
        </p>
      </header>

      <main className="cv-content">
        <PersonalInfoSection
          personalInfo={cvData.personalInfo}
        />

        <ExperienceSection
          experiences={cvData.experiences}
        />

        <EducationSection
          educations={cvData.educations}
        />

        <SkillsSection
          skills={cvData.skills}
        />
      </main>
    </div>
  )
}

export default App
