# CV Builder

A React-based CV builder that loads CV data from a JSON file.

## How to Use

1. **Edit your CV**: Modify the `public/cv.json` file with your personal information, experience, education, and skills.

2. **View your CV**: The website will automatically load and display your CV data.

3. **Live updates**: Changes to `cv.json` will be reflected when you refresh the page.

## JSON Format

Use the following structure in your `cv.json` file:

```json
{
  "personalInfo": {
    "name": "Your Name",
    "email": "your.email@example.com",
    "phone": "(555) 123-4567",
    "location": "City, State",
    "summary": "Brief summary about yourself and your career goals."
  },
  "experiences": [
    {
      "id": "exp1",
      "title": "Job Title",
      "company": "Company Name",
      "location": "City, State",
      "startDate": "Start Date",
      "endDate": "End Date",
      "description": "Detailed description of your responsibilities and achievements."
    }
  ],
  "educations": [
    {
      "id": "edu1",
      "degree": "Degree Name",
      "school": "School Name",
      "location": "City, State",
      "graduationYear": "Year",
      "gpa": "X.X/4.0",
      "details": "Additional details like coursework, honors, etc."
    }
  ],
  "skills": [
    {
      "id": "skill1",
      "name": "Skill Name",
      "level": "Expert",
      "category": "Category Name"
    }
  ]
}
```

## Features

- **Structured Data**: JSON provides type-safe, structured data storage
- **Validation**: TypeScript interfaces ensure data integrity
- **Organized Skills**: Skills are grouped by category for better organization
- **Responsive Design**: Works on desktop and mobile devices
- **Clean Layout**: Professional CV styling
- **TypeScript**: Type-safe development
- **Vite**: Fast development and build process

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## File Structure

```
src/
├── components/
│   ├── types.ts              # TypeScript interfaces
│   ├── PersonalInfoSection.tsx
│   ├── ExperienceSection.tsx
│   ├── EducationSection.tsx
│   ├── SkillsSection.tsx
│   ├── ExperienceForm.tsx    # (Not used in JSON mode)
│   ├── EducationForm.tsx     # (Not used in JSON mode)
│   ├── SkillForm.tsx         # (Not used in JSON mode)
│   └── index.ts              # Barrel exports
├── utils/
│   └── dataLoader.ts         # JSON data loading
├── App.tsx                   # Main app component
└── main.tsx                  # App entry point

public/
└── cv.json                   # Your CV data in JSON format
```
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
