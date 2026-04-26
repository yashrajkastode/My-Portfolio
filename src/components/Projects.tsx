import { ExternalLink, Languages, Pill, Hand } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Project {
  icon: LucideIcon;
  title: string;
  description: string;
  highlights: string[];
  tech: string[];
  link: string;
}

export default function Projects() {
  const projects: Project[] = [
    {
      icon: Languages,
      title: 'Hindi AI Text Summarizer',
      description: 'Production-oriented abstractive NLP system for generating summaries of Hindi text using Transformer models',
      highlights: [
        'Implemented pipeline using google/mt5-base Transformer model',
        'Built scalable Django REST backend with service-layer separation',
        'Integrated Celery with Redis for non-blocking API performance',
        'Custom Hindi text normalization pipeline for noisy data',
        'Optimized inference with beam search and repetition penalties'
      ],
      tech: ['Python', 'Django', 'PyTorch', 'Transformers', 'Celery', 'Redis'],
      link: 'https://github.com/yashrajkastode/Hindi-Text-Summarization'
    },
    {
      icon: Pill,
      title: 'Med-Matrix',
      description: 'Full-stack pharmaceutical safety tool that identifies harmful drug-to-drug interactions based on chemical salts',
      highlights: [
        'Migrated backend from Flask to Django 6.0 with robust RESTful API',
        'Developed many-to-many comparison algorithm for 100+ medications',
        'Built responsive UI with Tailwind CSS and interactive accordion system',
        'Real-time autocomplete search functionality',
        'Production-optimized with Gunicorn'
      ],
      tech: ['Python', 'Django', 'JavaScript', 'Tailwind CSS', 'Gunicorn'],
      link: 'https://github.com/yashrajkastode/med-matrix'
    },
    {
      icon: Hand,
      title: 'Hasthakshar using Deep Learning',
      description: 'Computer vision system to recognize and translate Indian Sign Language gestures',
      highlights: [
        'Created custom dataset of Indian Sign Language gestures',
        'Implemented stick figure representation for skeletal keypoint detection',
        'Achieved 90% accuracy in real-time gesture recognition',
        'Utilized TensorFlow/PyTorch for deep learning models'
      ],
      tech: ['Python', 'TensorFlow', 'PyTorch', 'OpenCV', 'MediaPipe'],
      link: 'https://github.com/yashrajkastode/Hastakshar'
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-slate-800">
          Featured Projects
        </h2>

        <div className="space-y-8">
          {projects.map((project, idx) => {
            const Icon = project.icon;
            const gradientClass = idx % 2 === 0
              ? 'from-blue-600 to-cyan-600'
              : 'from-cyan-600 to-blue-600';

            return (
              <div
                key={idx}
                className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 bg-gradient-to-br ${gradientClass} rounded-xl`}>
                        <Icon className="text-white" size={28} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-slate-800">{project.title}</h3>
                        <p className="text-slate-600 mt-1">{project.description}</p>
                      </div>
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 hover:bg-slate-200 rounded-lg transition-colors"
                      aria-label="View project"
                    >
                      <ExternalLink className="text-slate-600" size={20} />
                    </a>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-slate-700 mb-2">Key Features:</h4>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {project.highlights.map((highlight, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2 text-slate-600 text-sm">
                          <span className="text-blue-600 font-bold mt-1">→</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-4 py-1.5 bg-white text-slate-700 text-sm font-medium rounded-lg shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}