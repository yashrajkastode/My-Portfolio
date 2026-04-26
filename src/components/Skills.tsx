import { Code, Database, Cpu, Wrench } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface SkillCategory {
  icon: LucideIcon;
  title: string;
  color: 'blue' | 'cyan';
  skills: string[];
}

export default function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      icon: Code,
      title: 'Languages',
      color: 'blue',
      skills: ['C++', 'Python', 'JavaScript']
    },
    {
      icon: Cpu,
      title: 'AI & ML',
      color: 'cyan',
      skills: ['TensorFlow', 'PyTorch', 'NumPy', 'Pandas']
    },
    {
      icon: Database,
      title: 'Backend & APIs',
      color: 'blue',
      skills: ['Django', 'REST APIs', 'Celery', 'Redis']
    },
    {
      icon: Wrench,
      title: 'Core Concepts',
      color: 'cyan',
      skills: ['DSA', 'OOP', 'OS', 'Computer Networks', 'Async Systems']
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-slate-800">
          Technical Skills
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            const colorClass = category.color === 'blue' ? 'from-blue-600 to-blue-700' : 'from-cyan-600 to-cyan-700';
            const bgClass = category.color === 'blue' ? 'bg-blue-50' : 'bg-cyan-50';

            return (
              <div key={idx} className={`${bgClass} p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 duration-300`}>
                <div className={`inline-flex p-3 bg-gradient-to-br ${colorClass} rounded-lg mb-4`}>
                  <Icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-slate-800">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIdx) => (
                    <span
                      key={skillIdx}
                      className="px-3 py-1 bg-white text-slate-700 text-sm rounded-full shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}