import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Contacts from './components/Contacts'
import ProfessionalSummary from './components/ProfessionalSummary'
import Skills from './components/Skills'
import WorkExperience from './components/WorkExperience'
import Education from './components/Education'

interface ResumeData {
  contacts: {
    name: string
    title: string
    location: string
    phone: string
    email: string
  }
  professionalSummary: {
    summary: string
  }
  skills: {
    skills: Array<{
      category: string
      items: string[]
    }>
  }
  workExperience: {
    experiences: Array<{
      company: string
      position: string
      location: string
      duration: string
      achievements: string[]
    }>
  }
  education: {
    education: Array<{
      degree: string
      institution: string
      location: string
    }>
  }
}

function App() {
  const [jobType, setJobType] = useState<string>('')
  const [availableJobs, setAvailableJobs] = useState<{id: string; label: string}[]>([])
  const [resumeData, setResumeData] = useState<ResumeData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const defaultJobs = [
      { id: 'supply-chain-analyst', label: 'Supply Chain Analyst' },
      { id: 'web-developer', label: 'Web Developer' },
      { id: 'loblaw-strategy-analyst', label: 'Loblaw Strategy Analyst' },
    ]
    
    const loadJobs = () => {
      fetch('/data/')
        .then(res => res.text())
        .then(text => {
          const folderMatch = text.match(/href="([^"]+)"/g)
          const folders = new Set<string>()
          
          if (folderMatch) {
            folderMatch.forEach((match: string) => {
              const folder = match.replace(/href="|"/g, '')
              if (folder && !folder.includes('.') && folder !== 'data/') {
                folders.add(folder.replace('/', ''))
              }
            })
          }

          const jobs = Array.from(folders).map(folder => ({
            id: folder,
            label: folder.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
          }))

          const jobList = jobs.length > 0 ? jobs : defaultJobs
          setAvailableJobs(jobList)
          setJobType(jobList[0].id)
        })
        .catch(() => {
          setAvailableJobs(defaultJobs)
          setJobType('supply-chain-analyst')
        })
    }
    
    loadJobs()
  }, [])

  useEffect(() => {
    if (!jobType) return
    
    const loadResumeData = async () => {
      console.log(`Loading resume data for ${jobType}`);
      try {
        setLoading(true)
        const basePath = `/data/${jobType}`
        
        // Load theme CSS
        const themeId = 'job-theme-style';
        let link = document.getElementById(themeId) as HTMLLinkElement;
        if (!link) {
          link = document.createElement('link');
          link.id = themeId;
          link.rel = 'stylesheet';
          document.head.appendChild(link);
        }
        link.href = `${basePath}/theme.css`;

        const [contacts, summary, skills, experience, education] = await Promise.all([
          fetch(`${basePath}/contacts.json`).then(r => r.json()),
          fetch(`${basePath}/professional-summary.json`).then(r => r.json()),
          fetch(`${basePath}/skills.json`).then(r => r.json()),
          fetch(`${basePath}/work-experience.json`).then(r => r.json()),
          fetch(`${basePath}/education.json`).then(r => r.json()),
        ])

        setResumeData({
          contacts,
          professionalSummary: summary,
          skills,
          workExperience: experience,
          education,
        })
        console.log('Resume data loaded successfully:', { contacts, summary, skills, experience, education });
      } catch (error) {
        console.error('Error loading resume data:', error)
      } finally {
        setLoading(false)
      }
    }

    loadResumeData()
  }, [jobType])


  if (loading || !resumeData) {
    return <div className="loading">Loading resume...</div>
  }

  return (
    <>
      <div className="resume-container">
        <div className="job-selector">
          <label htmlFor="job-type">Select Job Type:</label>
          <select 
            id="job-type"
            value={jobType} 
            onChange={(e) => setJobType(e.target.value)}
          >
            {availableJobs.map(job => (
              <option key={job.id} value={job.id}>{job.label}</option>
            ))}
          </select>
        </div>

        <Header 
          name={resumeData.contacts.name} 
          title={resumeData.contacts.title}
        />
        
        <Contacts 
          location={resumeData.contacts.location}
          phone={resumeData.contacts.phone}
          email={resumeData.contacts.email}
        />
        
        <ProfessionalSummary 
          summary={resumeData.professionalSummary.summary}
        />
        
        <Skills 
          skills={resumeData.skills.skills}
        />
        
        <WorkExperience 
          experiences={resumeData.workExperience.experiences}
        />
        
        <Education 
          education={resumeData.education.education}
        />
      </div>
    </>
  )
}

export default App
