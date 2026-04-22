import type { CVData } from '../components'

export async function loadCVData(): Promise<CVData> {
    try {
        const response = await fetch('/cv.json')
        const cvData: CVData = await response.json()
        return cvData
    } catch (error) {
        console.error('Error loading CV data:', error)
        // Return default empty CV data
        return {
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
        }
    }
}