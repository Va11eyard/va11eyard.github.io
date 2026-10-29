import type { ResumeDataSchemaType } from '@/lib/resume';

/**
 * Sourced from: LinkedIn profile saved 2026-10-29, the SIST 2026 proceedings
 * contents (ISBN 979-8-3315-8165-7), Zenodo records, and github.com/Va11eyard.
 * Dates follow LinkedIn where it conflicts with the June 2026 CV.
 * No GPA is published (the CV draft and the older CV disagree). No ROP system
 * entry: its validation status is unverified, only the rop-reading repo is.
 */
export const resume = {
  header: {
    name: 'Dinmukhammed Mynzhassar',
    shortAbout:
      'Full-Stack Developer (React, TypeScript, Next.js, Go, Python, Java), UI/UX Designer, ML Engineer',
    location: 'Astana, Kazakhstan',
    contacts: {
      email: 'mynzhasardimash@gmail.com',
      github: 'Va11eyard',
      linkedin: 'dinmukhammed-mynzhassar',
    },
    skills: [
      'Python',
      'Go',
      'TypeScript',
      'JavaScript',
      'SQL',
      'PyTorch',
      'MONAI',
      'Hugging Face Transformers',
      'RAG pipelines',
      'LLM API integration',
      'STT / NLP',
      'Computer Vision',
      'FastAPI',
      'React',
      'Next.js',
      'Vite',
      'Tailwind CSS',
      'PostgreSQL',
      'MongoDB',
      'Docker',
      'Linux',
      'CI/CD (GitHub Actions)',
      'WebRTC',
      'Figma',
    ],
  },

  summary:
    'I build medical AI systems end to end: segmentation models in MONAI, RAG pipelines over clinical knowledge bases, and the Go and Next.js services that put them in front of patients and clinicians. I work as a full-stack and ML engineer in Astana on platforms covering psychology, urology, ophthalmology and lab-result interpretation. My chest X-ray segmentation work was published at IEEE SIST 2026. I am a master’s student in Applied Artificial Intelligence at Astana IT University (2025-2027).',

  workExperience: [
    {
      company: 'Galamat Group',
      location: 'Astana, Kazakhstan',
      contract: 'Full-time',
      title: 'Full Stack Developer, ML Engineer',
      start: '2026-01-01',
      end: null,
      description:
        'Build AI-assisted medical platforms as full-stack monorepos with a Go API backend and Next.js frontend.\n• Architected an AI-assisted psychology platform bridging patients and licensed psychologists.\n• Implemented RAG pipelines over curated medical knowledge bases to produce evidence-grounded clinical assistants.\n• Integrated real-time video consultation and payment processing into production telehealth features.\n• Built multi-role authentication, session modelling and clinician dashboards under healthcare data-handling requirements.',
    },
    {
      company: 'DAISY MENTAL HEALTH',
      location: 'Remote',
      contract: 'Full-time',
      title: 'Full Stack Developer, ML Engineer',
      start: '2025-08-01',
      end: null,
      description:
        'Full-stack and ML engineering on DAISY, an AI platform for emotional wellbeing released to public access in Kazakhstan and available in Kazakh, Russian and English.\n• Contributed to a Kazakh-language companion built around cultural context rather than a translated interface.\n• Worked on conversational context that carries emotional state and recurring situations across sessions.\n• The product is positioned as a complement to psychotherapy, not a replacement for a therapist or a diagnostic tool.',
    },
    {
      company: 'iQadam Systems',
      location: 'Astana, Kazakhstan',
      contract: 'Full-time',
      title: 'Full Stack Developer (React, TypeScript, Java, Go)',
      start: '2024-09-01',
      end: '2026-01-31',
      description:
        'Delivered frontend for enterprise applications: a CRM with biometric authentication, a secure historical archive platform and a kindergarten management system.\n• Built responsive City Transportation Systems dashboards for user management, company administration and media organisation.\n• Implemented JWT-based authentication flows and role-based access control in the UI layer.\n• Shipped chunked file-upload interfaces with progress tracking for large media assets.',
    },
    {
      company: 'City Innovation',
      location: 'Astana, Kazakhstan',
      contract: 'Full-time',
      title: 'Frontend Developer, UI/UX Designer',
      start: '2024-05-01',
      end: '2025-04-30',
      description:
        'Frontend and interface design for the AI Pradavan smart-city platform.\n• Developed responsive, accessible components in React, TypeScript and Tailwind CSS.\n• Refactored legacy UI into reusable modular structures, cutting estimated development overhead for follow-up features by 40%.\n• Led an onboarding-flow restructuring that raised registration conversions by 20%.\n• Designed interfaces consuming real-time AI-generated data streams.',
    },
    {
      company: 'Unipark',
      location: 'Remote',
      contract: 'Freelance',
      title: 'Frontend Developer, UI/UX Designer',
      start: '2024-11-01',
      end: '2025-03-31',
      description:
        'Designed and built the UniPark landing page and improved the user journey across multiple order types and profile management.\n• Ran user testing sessions and folded the findings back into the design.',
    },
  ],

  education: [
    {
      school: 'Astana IT University',
      degree: 'Master’s degree, Applied Artificial Intelligence · State Scholarship',
      start: '2025-09-01',
      end: '2027-06-30',
    },
    {
      school: 'Astana IT University',
      degree: 'Bachelor’s degree, Software Engineering · State Scholarship',
      start: '2022-09-01',
      end: '2025-06-30',
    },
  ],

  publications: [
    {
      title:
        'U-Net-Based Segmentation of Pulmonary Abnormalities in Chest X-Rays: A Prototype for AI-Assisted Diagnostics Using MONAI and Cross-Validation on Multi-Source Datasets',
      authors: [
        'Dinmukhammed Mynzhassar',
        'Zhanar Akhmetova',
        'Berdibek Oralkhanov',
      ],
      venue:
        '2026 IEEE 6th International Conference on Smart Information Systems and Technologies (SIST)',
      date: '2026-05-13',
      status: 'published',
      link: 'https://www.proceedings.com/content/086/086546webtoc.pdf',
      identifier: 'ISBN 979-8-3315-8165-7 · proceedings p. 394',
    },
    {
      title:
        'TurnShift: Sequential Detection of Mid-Conversation Author Substitution via Behavioral User Profiling',
      authors: ['Dinmukhammed Mynzhassar'],
      venue: 'Zenodo',
      date: '2026-09-07',
      status: 'preprint',
      link: 'https://doi.org/10.5281/zenodo.22636671',
      identifier: 'DOI 10.5281/zenodo.22636671 · software v1.0.1 DOI 10.5281/zenodo.22636275',
    },
  ],

  projects: [
    {
      name: 'SenAI',
      role: 'ML/AI Engineer & Full-Stack Developer',
      period: '2026',
      description:
        'AI-assisted psychology platform connecting patients with licensed psychologists: Go API and Next.js monorepo, RAG-backed assistant, video consultation and payments.',
      stack: ['Go', 'Next.js', 'RAG', 'PostgreSQL', 'WebRTC'],
    },
    {
      name: 'WellMen',
      role: 'ML/AI Engineer & Full-Stack Developer',
      period: '2026',
      description:
        'Urology patient-physician bridge with an AI clinical assistant grounded in RAG over medical knowledge bases, role-based access across patient and physician portals, deployed on Kazakhstan-resident hosting.',
      stack: ['Go', 'Next.js', 'RAG', 'Docker'],
    },
    {
      name: 'ODOS Vision',
      role: 'ML/AI Engineer & Full-Stack Developer',
      period: '2026',
      description:
        'Ophthalmological diagnostics platform running browser-based visual acuity and contrast-sensitivity tests, including mesopic Purkinje CSF and Landolt-ring protocols, with an adaptive test engine persisting structured results for longitudinal analysis.',
      stack: ['Go', 'Clean Architecture', 'Computer Vision', 'PostgreSQL'],
    },
    {
      name: 'InLab',
      role: 'ML/AI Engineer & Full-Stack Developer',
      period: '2026',
      description:
        'Medical lab-result interpretation: turns blood-work scans, PDFs and photos into plain-language explanations for patients and radiologists, with a RAG pipeline over data collected from subsidiary policlinics. Public fragment open-sourced.',
      stack: ['Go', 'React', 'Vite', 'RAG', 'Docker Compose'],
      link: 'https://github.com/Va11eyard/inlab-public-web',
    },
    {
      name: 'Pharma AI',
      role: 'ML/AI Engineer & Full-Stack Developer',
      period: '2026',
      description:
        'Voice-driven pharmacy automation with a speech-to-text pipeline supporting Kazakh language models for clinical order capture and recommendations, migrating inference to Kazakhstan-resident cloud.',
      stack: ['Python', 'Go', 'STT', 'Kazakh NLP'],
    },
    {
      name: 'TurnShift',
      role: 'Author',
      period: '2026',
      description:
        'Sequential behavioural-shift detection for conversational AI: CUSUM over per-user embedding residuals. Episode AUC 0.974 on PersonaChat and 0.900 on Blended Skill Talk under proxy author-substitution experiments; not validated on real-world account-takeover incidents.',
      stack: ['Python', 'Embeddings', 'CUSUM'],
      link: 'https://github.com/Va11eyard/turnshift',
    },
    {
      name: 'FRAME',
      role: 'Full-Stack Developer',
      period: '2026',
      description:
        'Live eyewear try-on from camera measurements: MediaPipe Face Landmarker produces 468 depth-aware landmarks, the browser renders the frame and a Go API computes the same geometry from the same data, so the storefront and the try-on share one source of truth.',
      stack: ['Next.js 16', 'React 19', 'Three.js', 'Go', 'MediaPipe'],
      link: 'https://github.com/Va11eyard/Eyewear',
    },
    {
      name: 'rop-reading',
      role: 'Author',
      period: '2026',
      description:
        'Blind ROP stage-reading form built on public ROP-VL frames, released CC BY 4.0.',
      stack: ['Retinal imaging', 'Open data'],
      link: 'https://github.com/Va11eyard/rop-reading',
    },
  ],
} satisfies ResumeDataSchemaType;
