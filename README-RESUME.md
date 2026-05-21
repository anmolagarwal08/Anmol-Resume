# Resume Website

A modular React resume website that dynamically loads different resume versions based on job type.

## Project Structure

```
public/
├── data/                # Resume data organized by job type
│   ├── supply-chain-analyst/
│   │   ├── contacts.json
│   │   ├── professional-summary.json
│   │   ├── skills.json
│   │   ├── work-experience.json
│   │   └── education.json
│   └── web-developer/
│       ├── contacts.json
│       ├── professional-summary.json
│       ├── skills.json
│       ├── work-experience.json
│       └── education.json
│
src/
├── components/           # Resume section components
│   ├── Header.tsx       # Name and title
│   ├── Header.css
│   ├── Contacts.tsx     # Contact information
│   ├── Contacts.css
│   ├── ProfessionalSummary.tsx
│   ├── ProfessionalSummary.css
│   ├── Skills.tsx       # Skills organized by category
│   ├── Skills.css
│   ├── WorkExperience.tsx
│   ├── WorkExperience.css
│   ├── Education.tsx
│   └── Education.css
├── App.tsx              # Main app component with job type selector
├── App.css
├── index.css
└── main.tsx
```

## How It Works

1. **Components**: Each resume section is a reusable React component with its own styling
2. **Data**: Resume content is stored in JSON files organized by job type
3. **Dynamic Loading**: The App component loads the appropriate JSON files based on the selected job type
4. **Job Selector**: Dropdown menu to switch between different resume versions

## JSON File Structure

### contacts.json
```json
{
  "name": "Your Name",
  "title": "Your Title",
  "location": "City, Country",
  "phone": "1234567890",
  "email": "your.email@example.com"
}
```

### skills.json
```json
{
  "skills": [
    {
      "category": "Category Name",
      "items": ["Skill 1", "Skill 2", "Skill 3"]
    }
  ]
}
```

### professional-summary.json
```json
{
  "summary": "Your professional summary text here..."
}
```

### work-experience.json
```json
{
  "experiences": [
    {
      "company": "Company Name",
      "position": "Job Title",
      "location": "City",
      "duration": "Start — End",
      "achievements": [
        "Achievement 1",
        "Achievement 2"
      ]
    }
  ]
}
```

### education.json
```json
{
  "education": [
    {
      "degree": "Degree Name",
      "institution": "University Name",
      "location": "City, Province"
    }
  ]
}
```

## Adding a New Job Type

1. Create a new folder in `public/data/{job-type-name}`
2. Add all 5 JSON files with the appropriate content
3. Update the `JobType` type in App.tsx to include the new type
4. Add the new option to the select dropdown in App.tsx

Example:
```tsx
type JobType = 'supply-chain-analyst' | 'web-developer' | 'your-new-job-type'
```

```tsx
<option value="your-new-job-type">Your New Job Type</option>
```

## Running the Project

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run lint     # Run ESLint
npm run preview  # Preview production build
```

## Printing/PDF Export

The resume is print-friendly. Use Ctrl+P (or Cmd+P) to print to PDF. The job selector will be hidden in print view.

## Features

- ✅ Modular component architecture
- ✅ Organized JSON-based content
- ✅ Multiple resume versions for different job types
- ✅ Responsive design (mobile-friendly)
- ✅ Print-friendly styling
- ✅ Easy to customize and maintain

## Customization

### Styling
Each component has its own CSS file for easy styling modifications. Update the colors in the CSS files or modify the component structure as needed.

### Content
Simply edit the JSON files in `public/data/{job-type}/` to update resume content for any job type. Changes will automatically be reflected in the app without requiring a rebuild.

### Adding New Sections
To add a new section:
1. Create a new component in `src/components/` with its CSS file
2. Add corresponding JSON files in each job type folder
3. Import and use the component in App.tsx
